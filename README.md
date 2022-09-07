# Typescript Monorepo

> Typescript starter kit for monorepo 

This project uses 
- [ESM - EcmaScript Modules](https://nodejs.org/api/esm.html)
- [pnpm - Performant NPM](https://pnpm.io/)
- [ESLint - TypeScript ESLint](https://typescript-eslint.io/)
- [Prettier - Code formatter](https://prettier.io/)
- [Jest - Testing Framework](https://jestjs.io/)

Pkg is used for creating executables for Linux, macOS, Windows of the above generated code.

### Features

- ``esm`` as module type
- ``pnpm`` as package manager and workspace features for monorepo
- ``eslint`` with strict typescript rules and ``standard`` code style for linting
- ``prettier`` for code formatting
- ``jest`` for writing test cases
- ``.nvmrc`` file for setting node version for project

### Code Structure

```
    apps/ -> End facing applications
    packages/ -> Libraires to be used by apps
    scripts/ -> Scripts that may help in CI/CD and for dev purposes
    ... -> other config files
```

### Details

``apps`` directory has user facing applications. Each app has it's ``dist`` directory where js compiled code relies.

``packages`` directory has libraries which can be used in ``apps`` directory app without copy pasting code.

This monorepo contains has 3 apps as example. ``dist/`` as output dir is common for all apps. ``src/`` is where TS code exists.
- ``api/`` - It's hello world api using ``koa.js``
- ``cli/`` - It's hello world cli using plain TS. It also has executable generation support thanks to Vercel's ``pkg`` package. Executables are generated in ``bin/`` directory.
- ``web/`` - It's hello world ``next.js`` app with linting support.

This monorepo contains 1 library as example. ``dist`` as output dir common for all libraries. ``lib/`` is where TS code exists.
- ``core/`` - It contains a ``greet`` function which imported by ``api``, ``cli``, ``web`` apps for making hello world possible.

### Authors

- Akshay ([iyorozuya](https://github.com/iyorozuya))
- Abdul Rauf ([armujahid](https://github.com/armujahid))

If you found any error or you want to contribute then please do.
If you found this repo useful then please ⭐ this repo.

Thank you :)
