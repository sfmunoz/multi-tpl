# DaisyUI 5 + TailwindCSS 4

## References

- https://tailwindcss.com/docs/installation/using-vite
- https://v5.daisyui.com/docs/install/

## Steps

- `pnpm create vite@latest -t react-swc-ts`
- `pnpm install`
- `pnpm install tailwindcss @tailwindcss/vite`
- `pnpm install -D daisyui@beta`
- **vite.config.ts** adapted to use **@tailwindcss/vite**
- **src/index.css** must load both **tailwindcss** and **daisyui**
- **src/App.tsx** adaption to show an array of buttons
