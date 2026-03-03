import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  
  use: {
    headless: true,
    trace: 'on-first-retry',
    // 1. Configuramos el idioma base a nivel global
    locale: 'es-CO',
    timezoneId: 'America/Bogota',
  },

  projects: [
    // --- 1. CONFIGURACIÓN DE LOS SETUPS ---
    {
      name: 'Setup Curso',
      testMatch: /curso\.setup\.ts/,
    },
    {
      name: 'Setup Trabajo',
      testMatch: /IPSSaludAntioquia\.setup\.ts/,
      // 2. IMPORTANTE: El Setup debe tener el locale para que la sesión se cree en español
      use: {
        ...devices['Desktop Chrome'],
        locale: 'es-CO',
        timezoneId: 'America/Bogota',
      },
    },

    // --- 2. CONFIGURACIÓN DE LAS CARPETAS DE PRUEBA ---
    {
      name: 'Pruebas Curso',
      testDir: './tests/curso',
      use: {
        ...devices['Desktop Chrome'],
        storageState: 'playwright/.auth/curso-user.json', 
      },
      dependencies: ['Setup Curso'], 
    },
    {
      name: 'Pruebas Trabajo',
      testDir: './tests/IPSSaludAntioquia',
      use: {
        ...devices['Desktop Chrome'],
        storageState: 'playwright/.auth/trabajo-user.json',
        // 3. Reforzamos el locale y añadimos el encabezado HTTP por si la web es terca
        locale: 'es-CO',
        timezoneId: 'America/Bogota',
        extraHTTPHeaders: {
          'Accept-Language': 'es-CO,es;q=0.9',
        },
      },
      dependencies: ['Setup Trabajo'], 
    },
  ],
});