import { test, expect } from '@playwright/test';

test('Inicio de sesión exitoso', async ({ page }) => {
    await page.goto('https://test.ikitech.com.co/health-portal/sign-in');
    await page.getByRole('textbox', { name: 'Usuario' }).fill('71279539');
    await page.getByRole('textbox', { name: 'Contraseña' }).fill('71279539Da*');
    await page.getByRole('button', { name: 'Iniciar sesión' }).click();
    await expect(page.getByText('Bienvenido al Portal de I.P.S Salud Antioquia')).toBeVisible();
    await page.pause();
})