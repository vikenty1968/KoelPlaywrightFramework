class AllSongsPage{
    constructor(page){
        this.page =page
        this.songContextMenu=page.getByTestId('song-context-menu')
        this.playItem= page.locator('li.playback')
    }
    getSongRow(songName){
        return this.page.locator('tr.song-item')
        .filter({has:this.page.getByText(songName,{exact:true})})
    }
    async openSongContextMenu(songName){
        const songRow = this.getSongRow(songName)
        await songRow.click({button:'right'})
    }
    async playSongFromContextMenu(){
        await this.playItem.click()
    }
}
export{AllSongsPage}