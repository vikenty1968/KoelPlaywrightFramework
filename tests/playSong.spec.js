import {test,expect}  from '../fixtures/fixtures.js'

test("Play a song from search result",async({page,homePage,searchPage})=>{
   await page.goto('/')
   await homePage.searchField.fill("BornKing")
   await page.pause()
   await searchPage.playSong('BornKing')
   await expect (searchPage.equalizer).toBeVisible()
})