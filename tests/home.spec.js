import {test,expect} from '../fixtures/fixtures.js'

test("Open homePage using token",async({homePage,page})=>{
  await page.goto('/')
 await expect(homePage.logOut).toBeVisible();
})

  test("Search BornKing song on home page",async({page,homePage,searchPage})=>{
 await page.goto('/')
   await homePage.searchField.fill("BornKing")
   await expect(page).toHaveURL(/#!\/search$/)
   await expect(searchPage.songTitle).toContainText('BornKing')
   await expect (searchPage.searchHeader).toContainText('BornKing')
  })
  test("Search returns no results for nonexistent song",async({page,homePage,searchPage})=>{
   await page.goto('/')
   await homePage.searchField.fill("NotExistingSong")
await expect(page).toHaveURL(/#!\/search$/)
await expect (searchPage.notFound).toBeVisible()
await expect (searchPage.searchHeader).toContainText('NotExistingSong')
  })







 