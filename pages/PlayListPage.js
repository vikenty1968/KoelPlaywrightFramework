class PlayListPage{
    constructor(page){
        this.page =page
        this.playListHeader = page.locator('#playlistWrapper .heading-wrapper h1')
        this.successBanner = page.locator('.success')
        this.confirmDialog = page.locator('.alertify .dialog');
        this.deletPlist=page.locator('.btn-delete-playlist')
       this.dialogOK = this.confirmDialog.locator('button.ok');
       this.songRows = page.locator('#playlistWrapper tr.song-item')
       this.deletePlaylistBtn = page.getByTitle('Delete this playlist')
    }
      getSongRow(songName){
        return this.songRows
        .filter({has:this.page.getByText(songName,{exact:true})})
    }
    getInfoBanner(message){
        return this.page.locator('.success').filter({hasText:message})
    }
   
}
export{PlayListPage}