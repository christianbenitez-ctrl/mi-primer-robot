import { test, expect } from '@playwright/test';
import { LoginPage } from './page-objects/LoginPage'; 

test('Login usando Page Objects sin fotos', async ({ page }) => {
    
    // 1. Ponemos a nuestro guardia a bloquear todas las imágenes
    await page.route('**/*.{png,jpg,jpeg}', route => route.abort());

    // 2. Ahora sí, navegamos a la página
    await page.goto('https://www.saucedemo.com/');
    
    // 3. Iniciamos sesión con nuestro asistente
    const asistenteLogin = new LoginPage(page);
    await asistenteLogin.iniciarSesion('standard_user', 'secret_sauce');

    // 4. Tomamos la foto de evidencia
    await page.screenshot({ path: 'screenshots/evidencia-sin-imagenes.png', fullPage: true }); 
});