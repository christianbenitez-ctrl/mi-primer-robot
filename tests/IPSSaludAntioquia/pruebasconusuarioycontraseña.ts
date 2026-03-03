import { test, expect } from '@playwright/test';

test.use({ storageState: {cookies: [], origins:[] }})

test('Validar mensaje de error al ingresar con usuario incorrecto', async ({ page }) => {
    await page.goto('https://test.ikitech.com.co/health-portal/sign-in');
    await page.getByRole('textbox', { name: 'Usuario' }).fill('Paco');
    await page.getByRole('textbox', { name: 'Contraseña' }).fill('71279539Da*');
    await page.getByRole('button', { name: 'Iniciar sesión' }).click();
    await expect(page.getByText('Usuario y/o contraseña incorrectos')).toBeVisible();
    await page.pause();
});

test('Validar mensaje de error al ingresar con contraseña incorrecta', async ({ page }) => {
    await page.goto('https://test.ikitech.com.co/health-portal/sign-in');
    await page.getByRole('textbox', { name: 'Usuario' }).fill('71279539');
    await page.getByRole('textbox', { name: 'Contraseña' }).fill('Paco');
    await page.getByRole('button', { name: 'Iniciar sesión' }).click();
    await expect(page.getByText('Usuario y/o contraseña incorrectos')).toBeVisible();
    await page.pause();
});

test('Validar mensaje de error al ingresar con usuario vacío', async ({ page }) => {
    await page.goto('https://test.ikitech.com.co/health-portal/sign-in');
    await page.getByRole('textbox', { name: 'Usuario' }).fill('');
    await page.getByRole('textbox', { name: 'Contraseña' }).fill('71279539Da*');
    await page.getByRole('button', { name: 'Iniciar sesión' }).click();
    await expect(page.getByText('Debe ingresar el nombre de usuario')).toBeVisible();
    await page.pause();
});

test('Validar mensaje de error al ingresar con contraseña vacía', async ({ page }) => {
    await page.goto('https://test.ikitech.com.co/health-portal/sign-in');
    await page.getByRole('textbox', { name: 'Usuario' }).fill('71279539');
    await page.getByRole('textbox', { name: 'Contraseña' }).fill('');
    await page.getByRole('button', { name: 'Iniciar sesión' }).click();
    await expect(page.getByText('Debe ingresar la contraseña')).toBeVisible();
    await page.pause();
});