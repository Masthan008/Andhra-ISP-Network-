# Andhra ISP Network — Developer Onboarding & Workflow Guide

Welcome to the **Andhra ISP Network** engineering platform! This guide documents the workflow, developer tooling, command line interface (CLI), code generators, and workspace automation built to support enterprise-grade software development.

---

## 🚀 Quick Start & Environment Setup

### 1. Requirements
* **Node.js**: v18.0.0 or higher
* **Package Manager**: `pnpm` (or `npm` v10+)
* **Build System**: TurboRepo (`turbo`)

### 2. Workspace Bootstrap
Run the automated workspace initialization script:
```bash
npm run bootstrap
```

### 3. Launch Development Servers
* Launch Web App: `npm run dev` (runs `apps/web` on `http://localhost:5173`)
* Launch All Applications: `npm run dev:all` (Web, API Gateway, and Admin)

---

## 🛠️ Developer CLI & Command Reference

Launch the interactive CLI utility:
```bash
npm run cli
```

| Script Command | Action / Description |
| :--- | :--- |
| `npm run cli` | Launch interactive Developer CLI |
| `npm run dashboard` | Launch real-time Terminal Workspace Dashboard |
| `npm run validate` | Run Master Workspace Validation & Boundary Audit |
| `npm run repair` | Auto-repair workspace, clear stale `.turbo` & build caches |
| `npm run diagnostics` | Perform system environment & port diagnostics |
| `npm run health` | Generate workspace health & code coverage audit report |
| `npm run reset` | Clean transient build outputs and re-build all shared packages |
| `npm run quality` | Calculate unified 0-100 Engineering Quality Score |

---

## ⚡ Code Generators

Automate boilerplate creation using standard generators:

### Generate UI Component
```bash
node generators/generate-component.js --name=CoverageBadge --package=ui
```

### Generate Custom Hook
```bash
node generators/generate-hook.js --name=useMandalSearch --package=hooks
```

### Generate Shared SDK Package (10-item blueprint)
```bash
node generators/generate-package.js --name=telemetry --description="Realtime Telemetry SDK"
```

### Generate NestJS Backend Module
```bash
node generators/generate-backend-module.js --name=coverage
```

### Generate Page Component
```bash
node generators/generate-page.js --name=coverage-report --app=web
```

---

## 🛡️ Git Workflow & Commit Rules

All git commits must adhere to Conventional Commits standard:
```bash
git commit -m "feat(ui): add new interactive map layer"
git commit -m "fix(api): resolve CORS header preflight issue"
```

Git hooks automatically run:
* **Pre-commit**: `node scripts/validate.js`
* **Commit-msg**: Conventional commit format validation
* **Pre-push**: `npm run build:all`
