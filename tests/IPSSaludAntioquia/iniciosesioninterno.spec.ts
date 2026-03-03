import { test, expect } from '@playwright/test';

test('Validar mensaje de bienvenida en el portal', async ({ page }) => {
    await page.goto('https://test.ikitech.com.co/health-portal/sign-in');
    await expect(page.getByText('Bienvenido al Portal de I.P.S Salud Antioquia')).toBeVisible();
});