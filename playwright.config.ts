import { defineConfig } from "@playwright/test";
export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  workers: process.env.CI ? 2 : 3,
  use: { baseURL: "http://127.0.0.1:3091", trace: "retain-on-failure" },
  projects: [320, 375, 768, 1024, 1440].map((width) => ({
    name: `${width}px`,
    use: { browserName: "chromium", viewport: { width, height: 900 } },
  })),
  webServer: {
    command: "npm run start -- --hostname 127.0.0.1 --port 3091",
    url: "http://127.0.0.1:3091",
    reuseExistingServer: !process.env.CI,
    timeout: 30000,
  },
});
