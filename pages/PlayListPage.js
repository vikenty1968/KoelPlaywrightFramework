class PlayListPage{
    constructor(page){
        this.page =page
        this.playListHeader = page.locator('#playlistWrapper .heading-wrapper h1')
        this.successBanner = page.locator('.success')
        this.confirmDialog = page.locator('.alertify .dialog');
        this.deletPlist=page.locator('.btn-delete-playlist')
       this.dialogOK = this.confirmDialog.locator('button.ok');
    }
    
}
export{PlayListPage}