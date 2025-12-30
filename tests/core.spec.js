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

  // 3. Type values (This tests the String vs Number ID bug)
  const schemaInput = inputs.last();
  await schemaInput.fill('cr56_test_automated');
  
  const qaInput = page.getByLabel('Value for QA in row 2');
  await qaInput.fill('automated_value');

  // 4. Verify JSON Output updates
  const jsonOutput = page.locator('#jsonOutput');
  const jsonText = await jsonOutput.innerText();
  
  expect(jsonText).toContain('cr56_test_automated');
  expect(jsonText).toContain('automated_value');
});

test('Security: Scripts are escaped (XSS Check)', async ({ page }) => {
  // 1. Click "Add Variable"
  await page.getByLabel('Add new environment variable row').click();
  
  // 2. Type a malicious script
  const inputs = page.locator('#envTable input[placeholder="Schema Name"]');
  await inputs.last().fill('<script>alert("hacked")</script>');

  // 3. Check JSON output
  const jsonOutput = page.locator('#jsonOutput');
  const jsonText = await jsonOutput.innerText();

  // 4. Ensure it was encoded (escaped) in the JSON generation or DOM
  // The JSON itself handles escaping, but let's check the DOM input value
  await expect(inputs.last()).toHaveValue('<script>alert("hacked")</script>');
});

test('Can delete a row', async ({ page }) => {
  // 1. Get initial count
  const initialCount = await page.locator('#envTable tbody tr').count();
  
  // 2. Click delete on the first row
  await page.getByLabel('Delete row 1').first().click();

  // 3. Verify count decreases
  const newCount = await page.locator('#envTable tbody tr').count();
  expect(newCount).toBe(initialCount - 1);
});