import { test, expect } from '@playwright/test';
import { LoginPage } from './page-objects/LoginPage'; 

test('Login usando Page Objects y fotos', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    
    const asistenteLogin = new LoginPage(page);
    await asistenteLogin.iniciarSesion('standard_user', 'secret_sauce');

    // ¡NUEVO! Le decimos al robot que tome una foto de toda la página
    await page.screenshot({ path: 'screenshots/evidencia-login.png', fullPage: true }); 
});