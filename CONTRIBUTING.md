# Contributing

## Commit Message Conventions

This project follows [Conventional Commits](https://conventionalcommits.org/) specification.

### Commit Types

| Type       | Description                                                                       | Example                              |
| ---------- | --------------------------------------------------------------------------------- | ------------------------------------ |
| `feat`     | A new feature                                                                     | `feat: add dark mode toggle`         |
| `fix`      | A bug fix                                                                         | `fix: resolve mobile layout issues`  |
| `docs`     | Documentation only changes                                                        | `docs: update installation guide`    |
| `style`    | Changes that do not affect the meaning of the code (white-space, formatting, etc) | `style: format code with prettier`   |
| `refactor` | A code change that neither fixes a bug nor adds a feature                         | `refactor: simplify component logic` |
| `perf`     | A code change that improves performance                                           | `perf: optimize image loading`       |
| `test`     | Adding missing tests or correcting existing tests                                 | `test: add unit tests for auth`      |
| `chore`    | Changes to the build process or auxiliary tools and libraries                     | `chore: update dependencies`         |
| `ci`       | Changes to CI configuration files and scripts                                     | `ci: add github actions workflow`    |
| `build`    | Changes that affect the build system or external dependencies                     | `build: update webpack config`       |
| `revert`   | Reverts a previous commit                                                         | `revert: undo last commit`           |

### Commit Message Format

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Examples

```text
feat: add user authentication system

- Add login form component
- Implement JWT token handling
- Add protected route wrapper

Closes #123
```

```text
fix(ui): resolve button alignment on mobile

The submit button was overlapping with form fields
on screens smaller than 768px.
```

```text
chore: update dependencies

- Bump React to v18.2.0
- Update testing libraries
- Fix security vulnerabilities
```

### Scopes

You can optionally add a scope to provide more context:

- `feat(auth): add login validation`
- `fix(ui): resolve button styling`
- `refactor(api): simplify error handling`

Common scopes in this project:

- `ui` - User interface changes
- `api` - API/backend changes
- `auth` - Authentication related
- `docs` - Documentation
- `config` - Configuration files

### Breaking Changes

If your commit introduces a breaking change, add `!` after the type/scope:

```text
feat!: remove deprecated API endpoints

BREAKING CHANGE: The /api/v1/users endpoint has been removed.
Use /api/v2/users instead.
```

### Why Conventional Commits?

- **Automatic Changelog Generation**: Tools can automatically generate changelogs
- **Semantic Versioning**: Version bumps are determined by commit types
- **Better Commit History**: Easier to understand what changed and why
- **Automated Releases**: CI/CD can automatically create releases based on commit types
