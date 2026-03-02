import { test, expect } from '@playwright/test';
// ¡Importamos a nuestro nuevo asistente!
import { LoginPage } from './page-objects/LoginPage'; 

test('Login usando Page Objects', async ({ page }) => {
    // 1. Navegamos a la página
    await page.goto('https://www.saucedemo.com/');

    // 2. "Contratamos" al asistente y le entregamos el control de la página
    const asistenteLogin = new LoginPage(page);

    // 3. Le damos la orden directa. ¡Adiós a los locators largos en el test!
    await asistenteLogin.iniciarSesion('standard_user', 'secret_sauce');

    // Aquí podrías poner tu validación (expect)
    await page.pause(); // Solo para ver el resultado antes de cerrar el navegador
});