class Sidebar{
    constructor(page){
        this.page =page
        this.allSongsLink=page.getByRole('link',{name:'All Songs'})
        this.createPlayList = page.getByTestId('sidebar-create-playlist-btn')
        this.enterField =page.locator('form.create>input')
        this.simplePlist= page.getByTestId('playlist-context-menu-create-simple')
        this.playListSection = page.locator('#playlists')
        
    }
    async openAllSongs(){
        await this.allSongsLink.click()

    }
    async createSimplePlaylist(pListName){
        await this.createPlayList.click()
        await this.simplePlist.click()
        await this.enterField.fill(pListName)
        await this.enterField.press('Enter')
    }
    getPlistByName(pListName){
        return this.playListSection
        .getByText(pListName,{exact:true})
    }
}
export {Sidebar}