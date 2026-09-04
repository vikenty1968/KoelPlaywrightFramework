import {test,expect} from '../fixtures/fixtures.js'

test("Open homePage using token",async({homePage,page})=>{
  await page.goto('/')
 await expect(homePage.logOut).toBeVisible();
})