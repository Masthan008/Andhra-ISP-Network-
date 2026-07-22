# ANDHRA ISP NETWORK
## Master Authentication Backend & Security Architecture
**Version:** 1.0.0-Enterprise  
**Phase:** Phase 4 — Backend Architecture (Prompt 2)  
**Classification:** Security Engineering & Systems Specification  
**Author:** Principal Security Engineer, Backend Architect, IAM Specialist, & Database Architect  
**Target Platform:** Production Systems (`Andhra ISP Network`)  
**Tagline:** Connecting Every Corner of Andhra Pradesh  

---

## 1. Executive Summary & Security Philosophy

The **Andhra ISP Network Authentication Backend & Security Architecture** defines the core identity management, authorization, session controls, and data protection mechanisms for the platform.

Engineered to support **millions of concurrent citizens, ISP managers, and system administrators** across Andhra Pradesh and future Indian state expansions, the architecture strictly enforces zero-trust security, defense-in-depth, and sub-10ms authorization verification.

```
┌───────────────────────────────────────────────────────────────────────────────────┐
|                          AUTH BACKEND ARCHITECTURE MESH                           |
├───────────────────┬───────────────────────────────────────────────────────────────┤
| Layer             | Specification & Technology Standard                           |
├───────────────────┼───────────────────────────────────────────────────────────────┤
| Identity Gateway  | NestJS REST API Gateway + Guards + Passport.js Strategies     |
| Token Subsystem   | RS256/ES256 Asymmetric JWT (15-min TTL) + Rotating Refresh Tokens|
| Caching & Session | Redis Cluster 7.2 (Session Store, Blacklist, OTP Cooldown)    |
| Primary Database  | PostgreSQL 16 (PostGIS-enabled, 18 Normalized Auth Tables)    |
| Secret Hashing    | Argon2id (Memory: 64MB, Time: 3, Parallelism: 4)             |
| Authorization     | Granular Role-Based Access Control (RBAC) + Permission Matrix |
| Audit Telemetry   | Pino Structured Logging + OpenTelemetry + Security Event Bus  |
└───────────────────┴───────────────────────────────────────────────────────────────┘
```

---

## 2. Role-Based Access Control (RBAC) Matrix

### 2.1 Persona Roles
1. **Guest (`ROLE_GUEST`):** Unauthenticated visitor. Can execute public spatial searches, view district boundaries, read provider profiles, and view map layers.
2. **Registered User (`ROLE_USER`):** Authenticated citizen/business. Can save favorite ISPs, submit broadband review ratings, bookmark PIN codes, and request callback quotes.
3. **ISP Manager (`ROLE_ISP_MANAGER`):** Authenticated local cable operator / ISP delegate. Can manage their verified branch office profiles, update fiber plan pricing, respond to citizen queries, and upload coverage polygons.
4. **Administrator (`ROLE_ADMIN`):** District/Regional admin officer. Can review pending ISP branch verifications, execute spatial DARE candidate matching, audit ETL ingestion queues, and manage local district flags.
5. **Super Administrator (`ROLE_SUPER_ADMIN`):** Executive system administrator. Full root privileges: IAM role modifications, system configuration, key rotation, global audit log access, and database maintenance.

```
+---------------------------------------------------------------------------------------------------+
|                                   GRANULAR PERMISSION MATRIX                                      |
+--------------------------+------------+---------------+-----------------+-----------+-------------+
| Permission String        | Guest      | Registered    | ISP Manager     | Admin     | Super Admin |
+--------------------------+------------+---------------+-----------------+-----------+-------------+
| `isp:read:public`        | ALLOW      | ALLOW         | ALLOW           | ALLOW     | ALLOW       |
| `district:read:public`   | ALLOW      | ALLOW         | ALLOW           | ALLOW     | ALLOW       |
| `review:create`          | DENY       | ALLOW         | DENY            | DENY      | ALLOW       |
| `isp:profile:update`     | DENY       | DENY          | ALLOW (Own ISP) | ALLOW     | ALLOW       |
| `isp:coverage:upload`    | DENY       | DENY          | ALLOW (Own ISP) | ALLOW     | ALLOW       |
| `etl:job:trigger`        | DENY       | DENY          | DENY            | ALLOW     | ALLOW       |
| `admin:user:manage`      | DENY       | DENY          | DENY            | ALLOW     | ALLOW       |
| `iam:role:grant`         | DENY       | DENY          | DENY            | DENY      | ALLOW       |
| `system:key:rotate`      | DENY       | DENY          | DENY            | DENY      | ALLOW       |
+--------------------------+------------+---------------+-----------------+-----------+-------------+
```

---

## 3. Database Schema Blueprint (PostgreSQL 16 / Prisma)

### 3.1 PostgreSQL DDL for 18 Auth Tables
The database schema utilizes strict relational constraints, foreign keys with cascading options, and soft deletion (`deleted_at TIMESTAMP WITH TIME ZONE`):

```sql
-- 1. Users Table
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE,
    phone_number VARCHAR(20) UNIQUE,
    password_hash VARCHAR(255),
    full_name VARCHAR(150) NOT NULL,
    is_email_verified BOOLEAN DEFAULT FALSE,
    is_phone_verified BOOLEAN DEFAULT FALSE,
    is_active BOOLEAN DEFAULT TRUE,
    is_locked BOOLEAN DEFAULT FALSE,
    failed_login_attempts INT DEFAULT 0,
    lockout_until TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP WITH TIME ZONE
);

-- 2. Roles Table
CREATE TABLE roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(50) UNIQUE NOT NULL,
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. Permissions Table
CREATE TABLE permissions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(100) UNIQUE NOT NULL,
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 4. RolePermissions Join Table
CREATE TABLE role_permissions (
    role_id UUID REFERENCES roles(id) ON DELETE CASCADE,
    permission_id UUID REFERENCES permissions(id) ON DELETE CASCADE,
    PRIMARY KEY (role_id, permission_id)
);

-- 5. UserRoles Join Table
CREATE TABLE user_roles (
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    role_id UUID REFERENCES roles(id) ON DELETE CASCADE,
    PRIMARY KEY (user_id, role_id)
);

-- 6. RefreshTokens Table
CREATE TABLE refresh_tokens (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    token_hash VARCHAR(255) UNIQUE NOT NULL,
    device_id VARCHAR(255) NOT NULL,
    user_agent TEXT,
    ip_address INET,
    is_revoked BOOLEAN DEFAULT FALSE,
    expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 7. Sessions Table
CREATE TABLE sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    device_id VARCHAR(255) NOT NULL,
    ip_address INET,
    user_agent TEXT,
    last_active_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 8. OTPRequests Table
CREATE TABLE otp_requests (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    phone_number VARCHAR(20) NOT NULL,
    otp_code_hash VARCHAR(255) NOT NULL,
    purpose VARCHAR(50) NOT NULL, -- 'LOGIN', 'VERIFICATION', 'RESET'
    attempts_count INT DEFAULT 0,
    is_used BOOLEAN DEFAULT FALSE,
    expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for sub-millisecond query performance
CREATE INDEX idx_users_email ON users(email) WHERE deleted_at IS NULL;
CREATE INDEX idx_users_phone ON users(phone_number) WHERE deleted_at IS NULL;
CREATE INDEX idx_refresh_tokens_user ON refresh_tokens(user_id) WHERE is_revoked = FALSE;
CREATE INDEX idx_sessions_user ON sessions(user_id);
CREATE INDEX idx_otp_phone ON otp_requests(phone_number, expires_at);
```

---

## 4. JWT Token & Session Architecture

### 4.1 Access & Refresh Token Specifications
* **Access Token:**
  * **Signing Algorithm:** Asymmetric `RS256` (RSA 4096-bit key pair) or `ES256`.
  * **Expiration (TTL):** 15 minutes.
  * **Claims Payload:** `sub` (User UUID), `email`, `roles` (Array), `permissions` (Array), `device_id`, `iss` (`andhra-isp-network`), `aud` (`andhra-isp-web`).
* **Refresh Token:**
  * **Expiration (TTL):** 30 days sliding window.
  * **Rotation Policy:** Single-use refresh token rotation. Exchanging a refresh token generates a new Access + Refresh token pair and revokes the previous token hash in Redis.
  * **Reuse Detection:** If an already-revoked refresh token is submitted, the security system detects potential token theft and immediately revokes **all** active sessions for that user UUID.

---

## 5. REST API Specifications (`/auth/*`)

### 5.1 Endpoint Inventory
```
+-----------------------------------------------------------------------------------+
|                            AUTHENTICATION REST API SUITE                          |
+-------------------------------+--------+------------------+-----------------------+
| Endpoint Route                | Method | Auth Requirement | Rate Limit Tier       |
+-------------------------------+--------+------------------+-----------------------+
| `/auth/register`              | POST   | Public           | 5 req / min           |
| `/auth/login`                 | POST   | Public           | 5 req / min           |
| `/auth/send-otp`              | POST   | Public           | 3 req / min           |
| `/auth/verify-otp`            | POST   | Public           | 5 req / min           |
| `/auth/refresh`               | POST   | Public (Cookie)  | 20 req / min          |
| `/auth/logout`                | POST   | Bearer JWT       | Unlimited             |
| `/auth/logout-all`            | POST   | Bearer JWT       | 5 req / min           |
| `/auth/forgot-password`       | POST   | Public           | 3 req / min           |
| `/auth/reset-password`        | POST   | Public           | 3 req / min           |
| `/auth/me`                    | GET    | Bearer JWT       | 60 req / min          |
| `/auth/sessions`              | GET    | Bearer JWT       | 30 req / min          |
| `/auth/sessions/{id}`         | DELETE | Bearer JWT       | 10 req / min          |
+-------------------------------+--------+------------------+-----------------------+
```

---

## 6. NestJS Monorepo Architecture (`apps/api/src/modules/auth/`)

```
apps/api/src/modules/auth/
├── controllers/
│   ├── auth.controller.ts        # REST Endpoints for Register, Login, Refresh, Logout
│   └── user.controller.ts        # Self profile management & sessions
├── services/
│   ├── auth.service.ts          # Core authentication logic & token generation
│   ├── password.service.ts      # Argon2id hashing & complexity verification
│   ├── otp.service.ts           # Redis-backed 6-digit OTP engine & SMS gateway
│   └── token.service.ts         # RS256 JWT signing, verification & rotation
├── guards/
│   ├── jwt-auth.guard.ts        # Passport JWT bearer guard
│   ├── rbac.guard.ts            # Dynamic permission matrix validator guard
│   └── rate-limiter.guard.ts    # Redis sliding-window rate limit guard
├── strategies/
│   ├── jwt.strategy.ts          # RS256 Public Key Verification Strategy
│   └── local.strategy.ts        # Argon2id credential verification strategy
├── dto/
│   ├── login-request.dto.ts     # Zod validated request DTOs
│   ├── register-request.dto.ts
│   └── otp-request.dto.ts
└── auth.module.ts               # NestJS Dependency Injection Module
```

---
**[END OF MASTER AUTHENTICATION BACKEND & SECURITY ARCHITECTURE]**
