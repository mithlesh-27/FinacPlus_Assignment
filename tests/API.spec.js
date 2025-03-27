import { test, expect } from '@playwright/test';

test('API Test', async ({ request }) => {
    
    // Step 1: Send a GET request to Reqres API
    const response = await request.get('https://reqres.in/');

    // Step 2: Verifying the response status code is 200
    expect(response.status()).toBe(200);

    // showing the response status code in the console
    console.log(`Response Status: ${response.status()}`);
});
