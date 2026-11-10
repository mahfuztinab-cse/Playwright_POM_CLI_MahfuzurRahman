
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testDir: './tests',

    fullyParallel: true,

    forbidOnly: !!process.env.CI,

    retries: 0,

    reporter: 'list',

    timeout: 30000,

    use: {
        ...devices['Desktop Chrome'],
        browserName: 'chromium',
        headless: true,
        trace: 'on-first-retry',
    },

    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },
    ],
});
