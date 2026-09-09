class AllSongsPage{
    constructor(page){
        this.page =page
        this.playItem= page.getByTestId('song-context-menu').locator('li.playback')
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
}
export{AllSongsPage}