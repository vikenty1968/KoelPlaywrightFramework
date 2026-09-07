import {test,expect}  from '../fixtures/fixtures.js'
const testSong="BornKing"

test("Play a song from search results",async({page,homePage,searchPage})=>{
   await page.goto('/')
   await homePage.searchField.fill(testSong)
    await searchPage.playSong(testSong)
   await expect (searchPage.equalizer).toBeVisible()
   await expect(searchPage.playerSongTitle).toHaveText(testSong)
    expect(await searchPage.isAudioPaused()).toBe(false)

})