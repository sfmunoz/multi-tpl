# React Aria Vanilla

## References

- https://react-spectrum.adobe.com/react-aria/getting-started.html
- https://react-spectrum.adobe.com/react-aria-starter.75b74b197.zip

## Steps

- Download https://react-spectrum.adobe.com/react-aria-starter.75b74b197.zip
- Purge **.yarnrc.yml**, **.yarn/install-state.gz** and **.yarn/releases/yarn-4.2.2.cjs**
- `yarn install`

## Original doc

Original doc from [https://react-spectrum.adobe.com/react-aria-starter.75b74b197.zip](https://react-spectrum.adobe.com/react-aria-starter.75b74b197.zip):

### React Aria Starter

Welcome to React Aria! This starter kit includes a [Storybook](https://storybook.js.org/) containing all of the examples in the docs. You can modify any of the components or their corresponding CSS files to play around or bootstrap your own component library.

To get started, run the following commands:

```shell
yarn
yarn storybook
```

### Building for Production

This starter uses [CSS Nesting](https://drafts.csswg.org/css-nesting/), which is supported in the latest version of all major browsers, but if further support is needed, you can compile this to flattened selectors by enabling the feature in [Lightning CSS](https://lightningcss.dev/docs.html) or using the [PostCSS Nesting](https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-nesting#usage) plugin in your build.
