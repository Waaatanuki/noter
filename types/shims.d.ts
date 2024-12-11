declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  const component: DefineComponent<object, object, any>
  export default component
}

declare module 'vue' {
  export interface GlobalComponents {
    Icon: typeof import('@iconify/vue')['Icon']
  }
}

export {}
