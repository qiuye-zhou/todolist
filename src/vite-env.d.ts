/// <reference types="vite/client" />

// eslint-disable-next-line unicorn/prevent-abbreviations
declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
