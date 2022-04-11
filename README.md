# Svelte Web components

## Running the project for development

Run `yarn dev`. This will allow you to import your components to the App.svelte for development purposes and will give you HMR and live reload.

## Building the library

To build the library you can run `yarn build:lib` which will bundle your components and place the bundles in the `dist/` directory.

The vite.lib.config.ts & the main.lib.ts are the secret sauce here. This tells the compiler to bundle your elements for web component use.

## Consuming you build library

Run `npx serve` to serve the root directory locally. Navigate to `http://localhost:3000/consumer`. This will use the `consumer.html` file that will consume the UMD bundle and register the custom components.

**_NOTE:** Be sure to do this after building your library with `yarn build:lib`
