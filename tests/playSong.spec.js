import {test,expect}  from '../fixtures/fixtures.js'
const testSong="BornKing"


test("Play a song from search results",async({page,homePage,searchPage,player})=>{
   await page.goto('/')
   await homePage.searchField.fill(testSong)
    await searchPage.playSong(testSong)
    await expect(searchPage.searchHeader).toHaveText(testSong) 
   await expect (player.equalizer).toBeVisible()
   await expect(player.playerSongTitle).toHaveText(testSong)
    expect(await player.isAudioPaused()).toBe(false)

})
test("Pause and resume a song using the footer player", async ({
  page,homePage,searchPage,player}) => {
    await page.goto('/')
    await homePage.searchField.fill(testSong)
    await searchPage.playSong(testSong)
 //   to check state repeatedly otherwise it's failed 
     await expect .poll(() => player.isAudioPaused()).toBe(false);
    await player.pause()
    await expect.poll(()=>(player.isAudioPaused())).toBe(true)
    await player.playBtn.click()
    await expect.poll(()=>player.isAudioPaused()).toBe(false)
});
test("Change volume with volume slider",async({page,homePage,searchPage,player})=>{
    await page.goto('/')
    await homePage.searchField.fill(testSong)
    await searchPage.playSong(testSong)
    await expect.poll(()=>player.isAudioPaused()).toBe(false);
    await player.volumeControl.hover()
    await expect(player.volumeSlider).toBeVisible()
    await player.volumeSlider.press('Home')
    await expect.poll(()=>player.getAudioVolume()).toBe(0)
    await player.volumeSlider.press('End')
    await expect.poll(()=>player.getAudioVolume()).toBe(1)
})