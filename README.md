# @antd-templater/eslint-config

- Antd-Templater 的 ESlint Config 插件
- Only Support ESlint v9.x

## How to Use it

- Install

  ```bash
    pnpm add @antd-templater/eslint-config
  ```

- Usage

  ```typescript
    import tseslint from 'typescript-eslint'
    import templater from '@antd-templater/eslint-config'

    export default tseslint.config(
      {
        extends: [
          ...templater.configs['flat/recommended'],
        ],
      }
    )
  ```

