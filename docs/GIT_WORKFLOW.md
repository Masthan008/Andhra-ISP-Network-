# Andhra ISP Network — Git Workflow & Release Strategy

This document establishes the branching model, commit conventions, and release strategy for **Andhra ISP Network**.

---

## 🌿 Branching Model
* `main`: Production-ready branch. All commits must pass CI build & unit tests.
* `feature/<feature-name>`: Short-lived feature development branches.
* `fix/<bug-name>`: Bug fix branches.

---

## 📜 Conventional Commit Format
```
<type>(<scope>): <short description>
```

### Supported Types:
* `feat`: New feature or SDK capability
* `fix`: Bug fix
* `docs`: Documentation updates
* `style`: Code styling or formatting
* `refactor`: Refactoring without behavior change
* `test`: Adding or updating tests
* `chore`: Build or workspace tooling changes

### Examples:
* `feat(sdk): implement @andhra-isp/observability metrics timer`
* `fix(ui): resolve SpotlightSearchBar keyboard shortcut listener`
* `docs(readme): add developer CLI usage guide`
