export class ProductsPage {
    constructor(page) {
        this.page = page;
        this.firstProduct = page.locator('.inventory_item').first();
        this.productName = this.firstProduct.locator('.inventory_item_name');
        this.productPrice = this.firstProduct.locator('.inventory_item_price');
        this.addToCartButton = this.firstProduct.locator('.btn_inventory');
      }
    
      async getProductDetails() {
        const name = await this.productName.innerText();
        const price = await this.productPrice.innerText();
        return { name, price };
      }
    
      async addToCart() {
        await this.addToCartButton.click();
      }
    }
  