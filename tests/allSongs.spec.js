import {test,expect}  from '../fixtures/fixtures.js'
const testSong = 'M33 Project - Emotional Soundtrack';
test("Open All Songs and find a specific song",async({page,sidebar,allSongsPage})=>{
    await page.goto('/')
    await sidebar.openAllSongs(testSong)
    await expect(page).toHaveURL(/#!\/songs$/)
    const song=allSongsPage.getSongRow(testSong)
    await expect(song).toBeVisible()
    await expect(song.locator('td.artist')).toHaveText('Unknown Artist')
    //test time format
    await expect(song.locator('td.time')).toHaveText(/^\d{2}:\d{2}$/)
})
test("Play a song from the All Songs context menu", async ({
  page,
  sidebar,
  allSongsPage,
  player
}) => {
  await page.goto('/');
  await sidebar.openAllSongs();
  await allSongsPage.openSongContextMenu(testSong)
  await allSongsPage.playSongFromContextMenu(testSong);

  await expect(player.playerSongTitle).toHaveText(testSong);
  await expect.poll(() => player.isAudioPaused()).toBe(false);
});