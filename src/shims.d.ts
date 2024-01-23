declare module '*.vue' {
  import Vue from 'vue';
  import { defineComponent } from 'vue';

  const component: ReturnType<typeof defineComponent>;
  export default component;
}

declare module "*.jpg" {}
declare module "*.ts" {}
declare module "*.svg" {}
declare module "*.gif" {}
declare module "*.json" {
  const value: unknown;
  export default value;
}
declare module "*.sass" {
  const content: Record<string, string>;
    export default content;
}
declare module "*.css" {}
declare module "*.scss" {
  const content: Record<string, string>;
    export default content;
}
declare module "*.png" {}