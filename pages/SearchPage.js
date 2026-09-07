class SearchPage{
    constructor (page){
this.page=page
this.searchHeader =page.locator('span>strong')
this.songTitle= page.getByText('BornKing',{exact:true})
this.notFound=page.getByTestId("song-excerpts").getByText('None found.',{exact:true})
this.equalizer=page.getByTestId('sound-bar-play')
this.playerSongTitle = page.getByTestId('footer-middle-pane').locator('.title')
this.audioPlayer = page.locator('div>audio')
    }
    
     //search fo song card
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
    async isAudioPaused(){
        const isPaused = await this.audioPlayer.evaluate(audio=>audio.paused)
        return isPaused;
    }
    
}
export {SearchPage}