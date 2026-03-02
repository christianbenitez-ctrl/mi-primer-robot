import {test, expect} from '@playwright/test';

test('Mi primer inicio de sesión', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('username').fill('standard_user');
    await page.getByPlaceholder('password').fill('secret_sauce');
    await page.getByRole('button', { name: 'login' }).click();
    //await expect(page.getByText('Products')).toBeVisible();
    await page.pause();
});