import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './playwright/tests',
  webServer: {
    command: 'npm run dev',
    port: 3000,
    reuseExistingServer: false,
  },
  use: {
    baseURL: 'http://localhost:3000',
    headless: true,
    screenshot: 'only-on-failure',
  },
});
