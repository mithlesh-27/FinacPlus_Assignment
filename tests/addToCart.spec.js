import { test, expect } from '@playwright/test';
import {LoginPage} from './pages/LoginPage';
import {ProductsPage} from './pages/ProductsPage';
import {CartPage} from './pages/CartPage';
import fs from 'fs';

// Utility function to store product details in a file
async function saveProductDetails(name, price) {
    const data = `Product: ${name}\nPrice: ${price}\n`;
    fs.writeFileSync('product_details.txt', data);
}

test('Add to Cart Test', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);

    // Step 1: Navigate to the site
    await page.goto('https://www.saucedemo.com/');
    
    // Step 2: Login to the site
    await loginPage.login('standard_user', 'secret_sauce');
    
    // Step 3: Verify successful login
    await expect(page.locator('.title')).toHaveText('Products');
    
    // Step 4: Get first product name and price
    const { name, price } = await productsPage.getProductDetails();
    await saveProductDetails(name, price);
    
    // Step 5: Click on add to cart
    await productsPage.addToCart();
    
    // Step 6: Navigate to cart and verify item
    await cartPage.navigateToCart();
    await expect(page.locator('.cart_item .inventory_item_name')).toHaveText(name);
    await expect(page.locator('.cart_item .inventory_item_price')).toHaveText(price);
    
    // Step 7: Logout
    await cartPage.logout();
    await expect(page.locator('#login-button')).toBeVisible();
});
