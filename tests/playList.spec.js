import {test,expect}  from '../fixtures/fixtures.js'
const playList = `Test Plist ${Date.now()}`
test("create simple playlist",async({page,sidebar,playListPage})=>{
    await page.goto('/')
    await sidebar.createSimplePlaylist(playList)
    await expect(playListPage.successBanner).toContainText('Created playlist')
    await expect(playListPage.playListHeader).toHaveText(playList)
   await expect( sidebar.getPlistByName(playList)).toHaveText(playList)
   //delete created playlist
   await playListPage.deletPlist.click()
//    await expect(playListPage.confirmDialog).toBeVisible();
//    await playListPage.dialogOK.click()
    await page.waitForTimeout(5000)
   await expect(playListPage.successBanner)
  .toContainText('Deleted playlist');
   await expect(playListPage.successBanner).toBeVisible()
   await expect(sidebar.getPlistByName(playList)).toHaveCount(0)
})