import{test as setup,expect}from "../fixtures/fixtures.js"
const authFile ='playwright/.auth/user.json'
setup('Authenticate',async ({page,loginPage,homePage})=>{
    await loginPage.openLoginPage()
    await loginPage.loginUser(process.env.KOEL_EMAIL,process.env.KOEL_PASSWORD)
    await expect(homePage.logOut).toBeVisible()
    //receiving user.json and put it in authFile
    await page.context().storageState({
        path:authFile
})
})