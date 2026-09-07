import {test,expect} from '../fixtures/fixtures.js'

test("Open homePage using token",async({homePage,page})=>{
  await page.goto('/')
 await expect(homePage.logOut).toBeVisible();
})
test("Search song on home page",async({page,homePage})=>{
 await page.goto('/')
   await homePage.searchField.fill("Riqui-Riqui")
  await expect (page.locator('span>strong')).toContainText('Riqui-Riqui')
  })