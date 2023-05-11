# tRPC Express Turborepo starter

This is an Express.js with tRPC & Prisma starter Turborepo.

## Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

## Push to Database

To push to database, run the following command:

```bash
cp apps/api/.env.example apps/api/.env
pnpm db:push
```

## Develop

To develop all apps and packages, run the following command:

```bash
pnpm dev
```
