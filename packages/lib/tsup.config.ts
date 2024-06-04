import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['index.ts'],
  format: ['cjs', 'esm'],
  sourcemap: true,
  clean: true,
  treeshake: true,
})
