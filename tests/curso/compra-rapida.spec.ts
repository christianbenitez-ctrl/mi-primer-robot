import { test, expect } from '@playwright/test';

test('Prueba saltando el login', async ({ page }) => {
    // ¡Navegamos directo a la zona de productos!
    await page.goto('https://www.saucedemo.com/inventory.html');

    // Hacemos una pausa para que veas con tus propios ojos que ya entró
    await page.pause();
});