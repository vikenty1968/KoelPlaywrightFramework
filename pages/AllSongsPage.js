class AllSongsPage{
    constructor(page){
        this.page =page
        this.playItem= page.getByTestId('song-context-menu').locator('li.playback')
        this.addToBtn = page.locator('[data-test="add-to-btn"]')
        this.addToMenu = page.getByTestId('add-to-menu')
        this.pListPlaceholder = page.getByPlaceholder('Playlist name')
        this.songRows = page.locator('tr.song-item')
    }
    getSongRow(songName){
        return this.page.locator('tr.song-item')
        .filter({has:this.page.getByText(songName,{exact:true})})
    }

    
    async playSongFromContextMenu(songName){
         const songRow = this.getSongRow(songName)
        await songRow.click({button:'right'})
        await this.playItem.click()
    }
    async addSongToNewPlaylist(pListName){
        await this.addToBtn.click()
       await this.pListPlaceholder.fill(pListName)
       await this.pListPlaceholder.press('Enter')
    }
     async selectFirstSongOnAllSong(){
        const songLocator = this.songRows.first();
        const songName = await songLocator.locator("td.title").innerText()
        await songLocator.click()
        return songName
    }
 
}
export{AllSongsPage}