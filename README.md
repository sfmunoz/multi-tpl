# Mantine

## References

- Core:
  - https://mantine.dev/getting-started/
  - https://mantine.dev/guides/vite/
- UI:
  - https://ui.mantine.dev/
  - https://tabler.io/docs/icons/libraries/react

## Steps

Core:

- `pnpm create vite@latest -t react-swc-ts`
- `pnpm install`
- `pnpm install @mantine/core @mantine/hooks`
- `pnpm install --save-dev postcss postcss-preset-mantine postcss-simple-vars`
- **postcss.config.cjs** creation/configuration
- **src/main.tsx**: enable **MantineProvider**
- **src/App.tsx** shows an unstyled tab list and banner

UI:

- `pnpm install @tabler/icons-react`
- **src/App.tsx** shows a button-menu

## VScode tuning (TODO)

Copied from [https://mantine.dev/getting-started/](https://mantine.dev/getting-started/):

(...)

**Set up VS Code**

By default, VS Code does not recognize postcss syntax, you need to install [PostCSS Intellisense and Highlighting](https://marketplace.visualstudio.com/items?itemName=vunguyentuan.vscode-postcss) to enable syntax highlighting and suppress variables ($variable) errors.

To get CSS variables autocomplete, install [CSS Variable Autocomplete extension](https://marketplace.visualstudio.com/items?itemName=vunguyentuan.vscode-css-variables). Then create .vscode/settings.json file in the root folder of your project with the following content:

```
{
  "cssVariables.lookupFiles": [
    "**/*.css",
    "**/*.scss",
    "**/*.sass",
    "**/*.less",
    "node_modules/@mantine/core/styles.css"
  ]
}
```

(...)
