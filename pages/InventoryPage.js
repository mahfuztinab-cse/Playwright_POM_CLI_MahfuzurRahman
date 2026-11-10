class InventoryPage {
  constructor(page) {
    this.page = page;
    this.title = page.locator('.title');
    this.inventoryList = page.locator('.inventory_list');
  }

  async isLoaded() {
    try {
      await this.page.waitForURL('**/inventory.html', { timeout: 5000 });
      await this.inventoryList.waitFor({ state: 'visible', timeout: 5000 });
      return true;
    } catch (error) {
      return false;
    }
  }
}

module.exports = { InventoryPage };