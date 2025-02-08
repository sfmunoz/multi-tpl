# shadcn/ui + TailwindCSS4 template

## References

- https://github.com/shadcn-ui/ui/issues/6585
- https://ui.shadcn.com/docs/installation/vite
- https://medium.com/@vitor.vicen.te/setting-up-path-aliases-in-a-vite-typescript-react-project-the-ultimate-way-d2a9a8ff7c63

## Steps

- `pnpm create vite@latest -t react-swc-ts`
- `pnpm install`
- `pnpm install tailwindcss @tailwindcss/vite`
- **vite.config.ts** adapted to use **@tailwindcss/vite**
- **src/index.css** adapted to import **tailwindcss**
- `pnpm install -D vite-tsconfig-paths`
- **vite.config.ts** adapted to use **vite-tsconfig-paths**
- **tsconfig.json** compilerOptions configuration
- **tsconfig.app.json** compilerOptions configuration
- `pnpm add -D @types/node`
- `pnpm dlx shadcn@canary init` → **Zinc + CSS variables = yes**
- unused files deleted
- `pnpm dlx shadcn@canary add button`
- **src/App.tsx** adaption to use the button
- `pnpm dlx shadcn@canary add alert`
- **src/App.tsx** adaption to use the alert
