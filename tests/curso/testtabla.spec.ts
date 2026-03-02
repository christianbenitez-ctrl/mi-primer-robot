import { test, expect } from '@playwright/test';

// 1. Definimos nuestro molde
interface Country {
    name: string;
    capital: string;
    currency: string;
    primaryLanguage: string;
}

test('Extrayendo datos de una tabla (Web Scraping)', async ({ page }) => {
    // Nota: Esta es una URL de ejemplo, similar a la que usa el profe
    await page.goto('https://cosmocode.io/automation-practice-webtable/');

    // 2. Preparamos una lista vacía para guardar nuestros países
    const countries: Country[] = [];

    // 3. Capturamos el contenedor principal (la tabla completa)
    const tableContainer = page.locator('//table[@id="countries"]');

    // 4. Extraemos TODAS las filas (.all() devuelve una lista de elementos)
    const rows = await tableContainer.locator('//tr').all();

    // 5. Usamos un ciclo FOR para recorrer las filas. 
    // Empezamos en 'i = 1' para saltarnos la fila 0 (que es la cabecera de la tabla)
    for (let i = 1; i < rows.length; i++) {
        const row = rows[i];

        // Leemos el texto de cada columna (td) exacta en esa fila
        const nameText = await row.locator('./td[5]').innerText();
        const capitalText = await row.locator('./td[7]').innerText();
        const currencyText = await row.locator('./td[8]').innerText();
        const languageText = await row.locator('./td[1]').innerText(); 

        // 6. Usamos nuestro molde para empaquetar los datos de este país
        const country: Country = {
            name: nameText,
            capital: capitalText,
            currency: currencyText,
            primaryLanguage: languageText
        };

        // 7. Lo metemos a la lista maestra
        countries.push(country);
    }

    // 8. ¡La recompensa! Filtrar datos como un experto.
    // Le pedimos al robot que nos muestre solo los países donde hablan portugués
    const portugueseCountries = countries.filter(country => country.primaryLanguage === 'Portuguese');
    
    console.log('Países donde hablan Portugués:');
    console.log(portugueseCountries);
});
