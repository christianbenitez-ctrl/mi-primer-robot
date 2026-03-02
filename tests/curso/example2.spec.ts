import {test} from '@playwright/test';

test('Mi primer inicio de sesión', async ({ page }) => {
    await page.goto('https://sauce-demo.myshopify.com/');
    await page.getByRole('link', { name: 'Log In' }).click();
    await page.locator('#customer_email').fill('standard_user');
    await page.locator('#customer_password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.pause();
});