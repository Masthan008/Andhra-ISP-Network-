# Developer Pre-Commit Verification Checklist

Before submitting a git commit, verify the following 10 items:

- [ ] 1. Code compiles without TypeScript errors (`npm run build:all`).
- [ ] 2. All unit tests pass cleanly (`npm run test`).
- [ ] 3. No text emojis used in UI components (Lucide SVG icons used).
- [ ] 4. All interactive buttons specify `type="button"` and `aria-label`.
- [ ] 5. All new shared packages follow the 10-item SDK blueprint.
- [ ] 6. Zero business logic or database mutation added to tooling files.
- [ ] 7. No circular imports between apps and shared packages (`npm run validate`).
- [ ] 8. Code formatted with Prettier and ESLint auto-fix.
- [ ] 9. Commit message follows Conventional Commits format (`feat:`, `fix:`, etc.).
- [ ] 10. `npm run validate` passes with 0 errors.
