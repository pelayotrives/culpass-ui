import { defineConfig } from 'cypress';
import viteTsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
      viteConfig: {
        plugins: [viteTsConfigPaths()],
      },
    },
  },
});