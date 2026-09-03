const{test,expect}=require('@playwright/test');
test("Login Success",async({page})=>{
    await page.goto("/");
    await page.locator("[type='email']").fill(process.env.KOEL_EMAIL);
    await page.locator("[type='password']").fill(process.env.KOEL_PASSWORD);
    await page.getByRole('button',{name:'Log In'}).click();
    await expect(page.getByTestId('btn-logout')).toBeVisible();

});