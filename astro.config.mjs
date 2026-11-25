// @ts-check
import { defineConfig } from 'astro/config';

/**
 * GitHub Pages:
 *  - Project site: SITE_URL=https://<user>.github.io BASE_PATH=/<repo>
 *  - User site:    SITE_URL=https://<user>.github.io BASE_PATH=/
 * 本地开发无需设置，默认使用根路径。
 */
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site: process.env.SITE_URL || 'http://localhost:4321',
  base,
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
});
