import{test,expect} from '@playwright/test';
import { LoginPage }  from '../pages/LoginPage';      
import { HomePage } from '../pages/HomePage';
test("Login Success",async({page})=>{
    const loginPage = new LoginPage(page);
    const homepage = new HomePage(page)
    await page.goto("/");
    await loginPage.loginUser(process.env.KOEL_EMAIL,process.env.KOEL_PASSWORD)
    await expect(homepage.logOut).toBeVisible();

});