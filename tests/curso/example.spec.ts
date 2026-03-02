import { test } from '@playwright/test';

test('Buscar un iPhone', async ({ page }) => {
    // 1. Ve a la página
    await page.goto('https://www.mercadolibre.com.co');
    
    // 2. Busca una caja de texto (input) y escribe la palabra "iPhone"
    await page.locator('input').fill('iPhone');
    
    // 3. Presiona la tecla Enter para ejecutar la búsqueda
    await page.keyboard.press('Enter');
    
    // 4. Pausa el robot para que tengas tiempo de ver los resultados
    await page.pause();
});
