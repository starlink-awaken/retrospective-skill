# Contributing to Retrospective Skill

Thank you for your interest in contributing! This document provides guidelines for contributing.

## 🤝 How to Contribute

### 1. Report Issues

Found a bug or have a feature request? Open an issue!

- Search existing issues first
- Use a clear title
- Describe the problem/feature
- Provide steps to reproduce (for bugs)

### 2. Submit Pull Requests

Want to contribute code? Follow these steps:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Ensure tests pass
5. Submit a pull request

### 3. Add Retrospective Cases

Have a retrospective case to share?

1. Add to `docs/retrospective/` directory
2. Follow the format in `context-compression.md`
3. Submit a pull request

## 📝 Code Standards

### TypeScript

- Use TypeScript strict mode
- Follow existing code style
- Add JSDoc for public APIs
- Write unit tests for new features

### Documentation

- Use clear, concise language
- Add examples where helpful
- Keep README.md up to date

## 🧪 Testing

```bash
# Run TypeScript checks
bun run typecheck

# Format code
bun run fmt
```

## 📦 Release Process

1. Update CHANGELOG.md
2. Bump version in package.json (if applicable)
3. Create release tag
4. Publish to GitHub

## 💬 Questions?

Open an issue for discussion.

## 📄 License

By contributing, you agree to license your work under the MIT License.
