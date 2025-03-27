**Playwright Automation**

This repository contains UI and API test automation scripts using **Playwright**.

🚀 **Features**
- ✅ Automated UI tests for **SauceDemo** (Add to Cart functionality)
- ✅ API test using **Reqres API**
- ✅ Follows **Page Object Model (POM)**
- ✅ Easy setup & execution

---

 **Installation & Setup**
1. **Clone the repository**:

   => git clone https://github.com/mithlesh-27/FinacPlus_Assignment.git
   
   => cd FinaPlus_Assignment
   
2. **Install dependencies**:
   
   =>  npm install
   
   =>  npx playwright install

   =>  npx playwright test

   =>  npx playwright test API.spec.js

   =>  npx playwright test --project=chromium --headed  //to all tests in chromium browser and in  headed mode

   =>  npx playwright test addToCart.spec.js --project=chromium --headed  //to run specific test in chromium browser and in headed mode


