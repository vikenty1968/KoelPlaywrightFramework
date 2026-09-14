import { test, expect } from "../fixtures/fixtures.js";

test.describe("Playlist", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });
  test("create simple playlist", async ({ page, sidebar, playListPage }) => {
    const playList = `Test Plist ${Date.now()}`;
    // await page.goto("/");
    await sidebar.createSimplePlaylist(playList);
    try {
      await expect(playListPage.successBanner).toContainText(
        "Created playlist",
      );
      await expect(playListPage.playListHeader).toHaveText(playList);
      await expect(sidebar.getPlistByName(playList)).toHaveText(playList);
    } finally {
      //delete created playlist
      await playListPage.deletPlist.click();
      //    await expect(playListPage.confirmDialog).toBeVisible();
      //    await playListPage.dialogOK.click()
      await page.waitForTimeout(5000);
      await expect(playListPage.successBanner).toContainText(
        "Deleted playlist",
      );
      await expect(playListPage.successBanner).toBeVisible();
      await expect(sidebar.getPlistByName(playList)).toHaveCount(0);
    }
  });
  test("Add song to playlist", async ({
    page,
    sidebar,
    allSongsPage,
    playListPage,
  }) => {
    const playList = `Test Plist ${Date.now()}`;

    // await page.goto("/");
    await sidebar.openAllSongs();

    const songName = await allSongsPage.selectFirstSongOnAllSong();

    await allSongsPage.addSongToNewPlaylist(playList);
    try {
      //assertions
      await expect(playListPage.playListHeader).toHaveText(playList);
      await expect(playListPage.songRows).toHaveCount(1);
      await expect(
        playListPage.getInfoBanner("Created playlist"),
      ).toBeVisible();
      await expect(playListPage.getSongRow(songName)).toBeVisible();
    } finally {
      // delete created playlist
      await playListPage.deletePlaylistBtn.click();
      await expect(playListPage.confirmDialog).toBeVisible();
      await playListPage.dialogOK.click();

      await expect(
        playListPage.getInfoBanner("Deleted playlist "),
      ).toBeVisible();
    }
  });
  test("Remove song from playlist", async ({
    page,
    sidebar,
    allSongsPage,
    playListPage,
  }) => {
    const playList = `Test Plist ${Date.now()}`;
    await sidebar.openAllSongs();
    const songName = await allSongsPage.selectFirstSongOnAllSong();
    await allSongsPage.addSongToNewPlaylist(playList);
    await expect(playListPage.getInfoBanner("Created playlist")).toBeVisible();
    await playListPage.removeSongFromPlayList(songName);
    try {
      await expect(
        playListPage.getInfoBanner(`Removed 1 song from "${playList}`),
      ).toBeVisible();
      //const removeBanner= page.locator('.success').filter({hasText:/Remov/})
      //   await expect(removeBanner).toBeVisible()
      await expect(playListPage.getSongRow(songName)).toHaveCount(0);
      await expect(playListPage.playListHeader).toHaveText(playList);
    } finally {
      await playListPage.deletePlaylistBtn.click();

      await expect(
        playListPage.getInfoBanner("Deleted playlist "),
      ).toBeVisible();
    }
  });
});
