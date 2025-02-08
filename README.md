# JollyUI + TailwindCSS3 template

## References

- https://www.jollyui.dev/docs/installation
- https://ui.shadcn.com/docs/installation/vite
- https://medium.com/@vitor.vicen.te/setting-up-path-aliases-in-a-vite-typescript-react-project-the-ultimate-way-d2a9a8ff7c63

## Steps

Common to **jollyui** and **shadcn**:

- `pnpm create vite@latest -t react-swc-ts` → create **sui-tw3-tpl**
- `pnpm install`
- `pnpm add -D tailwindcss@3 postcss autoprefixer`
- `pnpm dlx tailwindcss@3 init -p`
- **src/index.css** adaption to use tailwind
- **tailwind.config.js** content var configuration
- **tsconfig.json** compilerOptions configuration
- **tsconfig.app.json** compilerOptions configuration
- `pnpm add -D @types/node`
- `pnpm install -D vite-tsconfig-paths`
- **vite.config.ts** adapted to use **vite-tsconfig-paths**
- `pnpm dlx shadcn@latest init` → **New York + Zinc + CSS variables = yes**
- unused files deleted

**jollyui** specifics:

- `pnpm dlx shadcn@latest add https://jollyui.dev/default/button`
- **src/App.tsx** adaption to use the button
- `pnpm dlx shadcn@latest add https://jollyui.dev/default/calendar`
- **src/App.tsx** adaption to use the calendar
