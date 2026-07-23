# Andhra ISP Network — Engineering & Coding Standards

This document establishes the official engineering conventions and quality standards for **Andhra ISP Network**.

---

## 1. TypeScript Standards
* **Strict Mode**: `noImplicitAny`, `strictNullChecks`, `strictFunctionTypes` enabled universally across all packages.
* **Type Annotations**: Explicit return types required on public methods and API controllers.
* **Aliases**: Prefer `@andhra-isp/*` SDK packages over relative deep imports (`../../../../`).

## 2. React & UI Standards
* **Accessibility**: All interactive UI controls must specify `type="button"`, `aria-label`, or accessible text.
* **Icons**: Must use vector Lucide SVG icons (`lucide-react`) instead of text emojis.
* **Styling**: Vanilla CSS / Tailwind tokens following glassmorphic dark-mode palette (`slate-900`, `zinc-950`, `cyan-400`).

## 3. NestJS Backend Standards
* **OpenAPI Documentation**: All controllers must annotate endpoints with `@ApiTags()`, `@ApiOperation()`, `@ApiResponse()`.
* **Interceptors**: Global `ResponseInterceptor` wraps API responses in `{ success: true, data: T, timestamp: string }`.
* **Repository Pattern**: Data access MUST extend `BaseRepository<T>` for consistent CRUD methods.

## 4. Shared Package Blueprint Standards
Every package under `packages/` MUST strictly contain the 10-item blueprint:
1. `src/` (Package entry logic)
2. `components/` (UI components)
3. `hooks/` (Custom hooks)
4. `utils/` (Helper functions)
5. `types/` (TypeScript models)
6. `constants/` (Constant definitions)
7. `tests/` (Jest unit test files)
8. `index.ts` (Public export barrel)
9. `package.json` (Package declaration)
10. `README.md` & `CHANGELOG.md` (Documentation)
