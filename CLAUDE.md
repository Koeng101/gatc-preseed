# Genetic Assemblies — Keoni GA Designs

React + TypeScript + Vite site. Tailwind CSS for styling (brutalist aesthetic).

## Secret Tab Encryption

The "SECRET" tab content is AES-256-GCM encrypted. The encrypted blob lives at `src/data/encrypted_secret.json`.

**You must re-run encryption whenever files in `src/data/rant/` change or the password changes:**

```sh
npm run encrypt-secret   # reads password from .password file automatically
```

The password is stored in `.password` (gitignored). The script also accepts a CLI arg or `SECRET_PASSWORD` env var as alternatives.

Source files: `src/data/rant/research.txt`, `src/data/rant/rant_fixed.txt`, `src/data/rant/research_reports/*.txt`

## Build

```sh
npm run build    # tsc + vite build
npm run dev      # dev server
```
