export class CartPage {
    constructor(page) {
        this.page = page;
        this.cartIcon = '.shopping_cart_link';
        this.cartItemName = '.cart_item .inventory_item_name';
        this.cartItemPrice = '.cart_item .inventory_item_price';
        this.logoutMenu = '#react-burger-menu-btn';
        this.logoutButton = '#logout_sidebar_link';
      }
    
      async navigateToCart() {
        await this.page.click(this.cartIcon);
      }
    
      async verifyCartProduct(expectedName, expectedPrice) {
        await expect(this.page.locator(this.cartItemName)).toHaveText(expectedName);
        await expect(this.page.locator(this.cartItemPrice)).toHaveText(expectedPrice);
      }
    
      async logout() {
        await this.page.click(this.logoutMenu);
        await this.page.click(this.logoutButton);
      }
    }
    
  