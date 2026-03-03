import { test, expect } from '@playwright/test';

test.use({ storageState: {cookies: [], origins:[] }})

test('Aparición/desaparición del menú de documentos', async ({ page }) => {
    await page.goto('https://test.ikitech.com.co/health-portal/sign-in');
    await page.getByRole('combobox', { name: 'Tipo de usuario' }).click();
    await page.getByRole('option', { name: 'Paciente' }).click();
    await expect(page.getByRole('combobox', { name: 'Tipo de documento' })).toBeVisible();
    await page.getByRole('combobox', { name: 'Tipo de usuario' }).click();
    await page.getByRole('option', { name: 'Usuario interno' }).click();
    await expect(page.getByRole('combobox', { name: 'Tipo de documento' })).toBeHidden();
    await page.pause();
})