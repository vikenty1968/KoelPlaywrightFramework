import{test,expect} from '../fixtures/fixtures.js'
const invalidPassword = '123qwe'
const warningMessage = "Please fill out this field."
test("Login Success",async({loginPage,homePage})=>{
   
    await loginPage.openLoginPage()
    await loginPage.loginUser(process.env.KOEL_EMAIL,process.env.KOEL_PASSWORD)
    await expect(homePage.logOut).toBeVisible();

})
test("Login with invalid password",async({loginPage})=>{
    await loginPage.openLoginPage()
  await loginPage.loginUser(process.env.KOEL_EMAIL,invalidPassword)
  await expect(loginPage.koelLogo).toBeVisible();
  await expect(loginPage.loginForm).toHaveClass(/error/)
})
test("Login with empty password", async({loginPage})=>{
    await loginPage.openLoginPage();
    await loginPage.loginUser(process.env.KOEL_EMAIL,"");//empty password
    const infoMessge = await loginPage.password.evaluate(element =>element.validationMessage)
    expect(infoMessge).toBe(warningMessage);
})