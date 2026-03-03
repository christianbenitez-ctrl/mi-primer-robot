import { test, expect } from '@playwright/test';

test('Iniciar sesión como paciente con CC', async ({ page }) => {
    await page.goto('https://test.ikitech.com.co/health-portal/sign-in');
    await page.getByRole('combobox', { name: 'Tipo de usuario' }).click();
    await page.getByRole('option', { name: 'Paciente' }).click();
    await page.getByText('CC - Cédula de Ciudadanía').click(); 
    await page.getByRole('option', { name: 'CC - Cédula de Ciudadanía' }).click();
    await page.getByRole('textbox', { name: 'Usuario' }).fill('43765210');
    await page.getByRole('textbox', { name: 'Contraseña' }).fill('43765210');
    await page.getByRole('button', { name: 'Iniciar sesión' }).click();
    await expect(page.getByText('Bienvenido al Portal de I.P.S Salud Antioquia')).toBeVisible();
});