import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests', // Busca en la raíz, pero los proyectos filtrarán por carpeta
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  
  use: {
    headless: true, // Ideal para GitHub Actions
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    // --- 1. CONFIGURACIÓN DE LOS SETUPS ---
    {
      name: 'Setup Curso',
      testMatch: /curso\.setup\.ts/, // Solo busca el setup del curso
    },
    {
      name: 'Setup Trabajo',
      testMatch: /IPSSaludAntioquia\.setup\.ts/, // Solo busca el setup de tu trabajo
    },

    // --- 2. CONFIGURACIÓN DE LAS CARPETAS DE PRUEBA ---
    {
      name: 'Pruebas Curso',
      testDir: './tests/curso', // Bloquea al robot solo en esta carpeta
      use: {
        ...devices['Desktop Chrome'],
        storageState: 'playwright/.auth/curso-user.json', 
      },
      dependencies: ['Setup Curso'], 
    },
    {
      name: 'Pruebas Trabajo',
      testDir: './tests/IPSSaludAntioquia', // <-- ¡TU CARPETA DE TRABAJO EXACTA!
      use: {
        ...devices['Desktop Chrome'],
        storageState: 'playwright/.auth/trabajo-user.json', 
      },
      dependencies: ['Setup Trabajo'], 
    },
  ],
});