const { test, expect } = require('@playwright/test');

// Serve the index.html file
test.beforeEach(async ({ page }) => {
  // Assuming the workflow starts a server on port 8080
  await page.goto('http://localhost:8080'); 
});

test('Page loads and has correct title', async ({ page }) => {
  await expect(page).toHaveTitle(/Power Platform Deployment Settings/);
});

test('Can add a new Environment Variable and update JSON', async ({ page }) => {
  // 1. Click "Add Variable"
  await page.getByLabel('Add new environment variable row').click();

  // 2. Find the new input (it auto-focuses, so we can verify focus or count)
  const inputs = page.locator('#envTable input[placeholder="Schema Name"]');
  await expect(inputs).toHaveCount(2); // 1 default + 1 new

  // 3. Type values
  const schemaInput = inputs.last();
  await schemaInput.fill('cr56_test_automated');
  
  const qaInput = page.getByLabel('Value for QA in row 2');
  await qaInput.fill('automated_value');

  // 4. Verify JSON Output updates (Using toContainText handles the debounce delay)
  const jsonOutput = page.locator('#jsonOutput');
  
  // FIX: Wait for the text to appear (handles the 300ms debounce)
  await expect(jsonOutput).toContainText('cr56_test_automated');
  await expect(jsonOutput).toContainText('automated_value');
});

test('Security: Scripts are escaped (XSS Check)', async ({ page }) => {
  // 1. Click "Add Variable"
  await page.getByLabel('Add new environment variable row').click();
  
  // 2. Type a malicious script
  const inputs = page.locator('#envTable input[placeholder="Schema Name"]');
  await inputs.last().fill('<script>alert("hacked")</script>');

  // 3. Check JSON output
  const jsonOutput = page.locator('#jsonOutput');

  // FIX: Wait for the escaped text to appear
  // Note: JSON.stringify will escape quotes, so we check for the content safely
  await expect(jsonOutput).toContainText('<script>alert("hacked")</script>');

  // 4. Ensure the DOM input value remains exactly what was typed (not double encoded)
  await expect(inputs.last()).toHaveValue('<script>alert("hacked")</script>');
});

test('Can delete a row', async ({ page }) => {
  // 1. Get initial count
  const rows = page.locator('#envTable tbody tr');
  const initialCount = await rows.count();
  
  // 2. Click delete on the first row
  await page.getByLabel('Delete row 1').first().click();

  // 3. Verify count decreases
  // FIX: Using expect().toHaveCount() automatically retries until the animation finishes
  await expect(rows).toHaveCount(initialCount - 1);
});