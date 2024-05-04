import { defineConfig } from 'tsup'

export default defineConfig([
  {
    entry: [
      'src/config/library-3.x.ts',
      'src/meta.ts',
    ],
    format: ['cjs', 'esm'],
    sourcemap: false,
    clean: true,
    dts: false,
  },
  {
    entry: ['src/index.ts'],
    format: ['cjs', 'esm'],
    sourcemap: false,
    clean: true,
    dts: true,
  },
])
