# Chakra

## Reference

https://chakra-ui.com/docs/get-started/frameworks/vite

## Steps

- `pnpm create vite@latest -t react-swc-ts`
- `pnpm install`
- `pnpm i @chakra-ui/react @emotion/react`
- `npx @chakra-ui/cli snippet add`
- **tsconfig.app.json** target set to **ESNext**
- **src/main.tsx** Provider configured
- `pnpm i -D vite-tsconfig-paths`
- **vite.config.ts** adapted to use **vite-tsconfig-paths**
- **src/App.tsx** show a couple of buttons
