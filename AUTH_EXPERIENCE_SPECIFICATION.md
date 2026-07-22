# ANDHRA ISP NETWORK
## Master Authentication Frontend Experience Specification
**Version:** 1.0.0-Enterprise  
**Phase:** Phase 4 — Frontend Authentication (Prompt 1)  
**Classification:** Security UX & Authentication Frontend Specification  
**Author:** Lead UX Designer, Authentication Specialist, Frontend Architect, & Next.js Engineer  
**Target Platform:** Production Web System (`Andhra ISP Network`)  
**Tagline:** Connecting Every Corner of Andhra Pradesh  

---

## 1. Executive Authentication UX Vision & Strategy

### 1.1 The Enterprise Auth Standard
The **Authentication Frontend Experience** establishes a seamless, trusted entry portal for all user personas across Andhra Pradesh (Guests, Citizens, ISP Managers, Administrators, Super Admins).

Inspired by **Linear, Notion, Vercel, GitHub, Clerk, and Supabase Auth**, the interface combines **sub-millisecond client validation, glassmorphic auth cards, and WCAG 2.1 AA accessibility**.

```
+-----------------------------------------------------------------------------------+
|                     AUTHENTICATION ARCHITECTURE PILLARS                           |
+-------------------+---------------------------------------------------------------+
| Experience Pillar | Technical Standard                                            |
+-------------------+---------------------------------------------------------------+
| Multi-Method      | Unified tabbed entry for Email + Password and Phone + OTP.    |
| Password Meter    | Real-time 4-tier strength calculation (Weak, Fair, Good, Strong).|
| Smart OTP Input   | 6-digit auto-advancing, paste-supported code input with timer.|
| Role Awareness    | UI pre-configured for Guest, ISP Manager, & Administrator.    |
| Future-Ready SSO  | Placeholders for Google, GitHub, Microsoft, and SAML/SSO.      |
| Accessible        | Full keyboard traversal, screen reader labels, & focus rings. |
+-------------------+---------------------------------------------------------------+
```

---

## 2. Authentication Screen Blueprints

### 2.1 Screen Inventory & UX Flows
1. **Welcome Screen (`/auth`):** Brand logo mark, mission tagline, primary buttons (`Sign In ➔`, `Create Account ✨`), and quick social logins.
2. **Login Screen (`/auth/login`):** Email + Password input, Show/Hide password toggle, "Remember Me" checkbox, "Forgot Password?" link, and Social SSO buttons.
3. **Register Screen (`/auth/register`):** Full Name, Email, Phone Number, Password Strength Meter, Confirm Password, and Terms & Privacy acceptance.
4. **Forgot Password (`/auth/forgot-password`):** Email prompt to send password recovery reset link.
5. **Reset Password (`/auth/reset-password`):** New password entry with real-time rule matching.
6. **Verify OTP Screen (`/auth/verify-otp`):** 6-digit PIN input with 60-second countdown timer and "Resend OTP" trigger.
7. **Email Verification (`/auth/verify-email`):** Pending email verification status with "Resend Verification" link.
8. **Account Created (`/auth/account-created`):** Celebration success card directing users to their personalized dashboard.
9. **Session Expired (`/auth/session-expired`):** Re-authentication modal preserving draft state.
10. **Account Locked (`/auth/account-locked`):** Security lock notification with unlock instructions.

---

## 3. Next.js Component Architecture under `apps/web/src/components/auth/`

```
apps/web/src/components/auth/
├── AuthContainer.tsx           # Master Auth Card Wrapper with Brand Branding
├── LoginForm.tsx               # Email/Password & Phone/OTP Login Tabbed Form
├── RegisterForm.tsx            # Multi-field Registration Form
├── ForgotPasswordForm.tsx      # Password Recovery Form
├── ResetPasswordForm.tsx       # New Password Form
├── OTPInputGroup.tsx           # 6-Digit Auto-Advancing OTP Input Component
├── PasswordStrengthMeter.tsx   # Real-Time Password Complexity Indicator
├── SocialLoginButtons.tsx      # Google, GitHub, Microsoft SSO Placeholders
├── AuthBannerNotice.tsx        # Success/Error/Warning Alert Banners
└── index.ts                    # Public Barrel Export
```

---

## 4. Web Accessibility & Security UX Blueprint

1. **Accessibility (WCAG 2.1 AA):** High-contrast focus rings (`outline: 2px solid #09090B`). Inputs use explicit HTML label associations (`htmlFor`), `aria-describedby` for field errors, and `aria-invalid`.
2. **Security UX:** Inputs disable `autocomplete="off"` for sensitive one-time codes where appropriate, provide visible show/hide toggles, and enforce password complexity client-side before submission.

---
**[END OF MASTER AUTHENTICATION FRONTEND SPECIFICATION]**
