import { test as setup, expect } from '@playwright/test';

// Le indicamos la ruta donde va a guardar el archivo con la memoria (el gafete)
const authFile = 'playwright/.auth/curso-user.json'; 

setup('Autenticarse una sola vez', async ({ page }) => {
    // 1. Navegamos e iniciamos sesión normalmente
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    // 2. LA MAGIA: Le ordenamos que guarde el estado de la sesión en el archivo
    await page.context().storageState({ path: authFile });
});