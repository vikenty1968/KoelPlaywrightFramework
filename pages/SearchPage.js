class SearchPage{
    constructor (page){
this.page=page
this.searchHeader =page.locator('span>strong')
this.notFound=page.getByTestId("song-excerpts").getByText('None found.',{exact:true})
this.audioPlayer = page.locator('div>audio')
    }
    
     //locator search fo song card
    getSongCard(songName){
        return this.page.getByTestId('song-excerpts')
            .locator('[data-test="song-card"]').filter({hasText:songName})
    }
    // function play song
    async playSong(songName){
     const songCard = this.getSongCard(songName)
     const playArea = songCard.locator('.cover')
     const playBtn = playArea.locator('.control')
     await playArea.hover()
     await playBtn.click()
    }

}
export {SearchPage}