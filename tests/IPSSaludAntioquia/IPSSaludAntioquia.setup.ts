import { test as setup, expect } from '@playwright/test';

// Le indicamos la ruta exacta donde va a guardar la sesión de tu trabajo
const authFile = 'playwright/.auth/trabajo-user.json'; 

setup('Autenticarse en IPS Salud Antioquia', async ({ page }) => {
    // 1. Navegamos e iniciamos sesión en tu portal
    await page.goto('https://test.ikitech.com.co/health-portal/sign-in');
    await page.getByRole('textbox', { name: 'Usuario' }).fill('71279539');
    await page.getByRole('textbox', { name: 'Contraseña' }).fill('71279539Da*');
    await page.getByRole('button', { name: 'Iniciar sesión' }).click();
    
    // 2. Validamos que entramos exitosamente
    await expect(page.getByText('Bienvenido al Portal de I.P.S Salud Antioquia')).toBeVisible();
    
    // 3. LA MAGIA: Guardamos el estado de la sesión en el archivo
    await page.context().storageState({ path: authFile });
});