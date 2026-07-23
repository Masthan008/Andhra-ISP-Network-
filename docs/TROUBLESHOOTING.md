# Andhra ISP Network — Troubleshooting & Workspace Repair Manual

This manual provides diagnostic solutions for common environment issues, build errors, and package resolution problems.

---

## 🛠️ Automated Repair
If you encounter missing module errors, broken caches, or unlinked packages:
```bash
npm run repair
```

If transient build artifacts corrupt TurboRepo output:
```bash
npm run reset
```

---

## 🔍 Common Issues & Solutions

### 1. `Error: Cannot find module 'vite'` or module resolution failures
* **Cause**: `node_modules` bin links missing or unlinked package.
* **Fix**: Run `npm run repair` or `npm install` from the monorepo root.

### 2. Port Conflict (Port 3000 / 5173 / 5174 already in use)
* **Cause**: Previous dev server process running in background.
* **Fix**: Run `npm run diagnostics` to inspect active ports, then terminate conflicting Node processes.

### 3. Pre-commit hook failing on git commit
* **Cause**: Missing 10-item blueprint items in a new shared package or invalid commit message format.
* **Fix**: Run `npm run validate` to see exact missing items, and format commit messages as `feat(scope): message`.
