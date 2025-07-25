// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  outDir: 'docs',
  integrations: [react()],
  site: 'https://quinntegral.github.io/quinntegral.github.io/',
  base: '/', // IMPORTANT for GitHub Pages subpath
});
