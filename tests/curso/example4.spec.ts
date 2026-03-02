import { test } from '@playwright/test';

test('Extraer títulos de MercadoLibre', async ({ page }) => {
    // 1. Las instrucciones que ya conoces: Navegar y buscar
    await page.goto('https://www.mercadolibre.com.co');
    await page.locator('input').fill('iPhone');
    await page.keyboard.press('Enter');

    // 2. Esperamos un segundo a que carguen los resultados (como el internet toma tiempo)
    await page.waitForTimeout(2000); 

    // 3. LA NOVEDAD: Localizamos todos los títulos (que son tipo 'h2') y extraemos sus textos.
    // Todo esto se guarda en la caja que llamamos "titulos".
    const titulos = await page.locator('.poly-component__title').allInnerTexts();

    // 4. Le pedimos al robot que nos diga cuántos resultados encontró en total.
    // La palabra ".length" significa longitud/cantidad.
    console.log('Total de resultados encontrados:', titulos.length);

    // 5. Iniciamos el ciclo: Por cada título individual dentro de la caja general "titulos"...
    for (const titulo of titulos) {
        // ...imprime un mensaje en la terminal con el nombre del celular.
        console.log('El celular es:', titulo);
    }
});