# Shared String Constants with msg()

Define translatable strings once in a shared file using `msg()`, then resolve them per-locale in both server and client components.

**[Live Demo](https://shared-strings-msg.generaltranslation.dev)** | **[General Translation Docs](https://generaltranslation.com/docs)**

## About

This example demonstrates the `msg()` pattern for sharing translatable string constants across server and client components. Strings are defined in a single file and resolved at render time using `getMessages()` (server) or `useMessages()` (client), supporting ICU message format with plurals, dates, and interpolation.

## GT Features Used

- `msg()` — Define translatable string constants
- `getMessages()` — Resolve strings in server components
- `useMessages()` — Resolve strings in client components
- `<T>` — JSX translation
- `<Var>` — Dynamic values inside `<T>`
- `<LocaleSelector>` — Language picker
- `loadTranslations` — Local translation storage

## Getting Started

```bash
git clone https://github.com/gt-examples/shared-strings-msg.git
cd shared-strings-msg
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Built With

- [Next.js](https://nextjs.org)
- [General Translation](https://generaltranslation.com) (gt-next)
- [Tailwind CSS](https://tailwindcss.com)
