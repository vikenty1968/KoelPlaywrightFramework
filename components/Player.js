
class Player {
    constructor(page){
         this.page=page
         this.playerSongTitle =page.getByTestId('footer-middle-pane').locator('.title')
         this.audioElement = page
            .getByTestId('footer-middle-pane')
            .locator('audio');
         this.equalizer=page.getByTestId('sound-bar-play')
         this.playBtn  = page.getByTestId('play-btn')
         this.pauseBtn  = page.getByTestId('pause-btn')
         this.playerBtn = page.locator(' .side.player-controls')
         //volume control and slider
         this.volumeControl = page.locator('#volume')
         this.volumeSlider = page.getByRole('slider',{name:'Volume'})
    }
     async isAudioPaused(){
        const isPaused = await this.audioElement.evaluate(audio=>audio.paused)
        return isPaused;
    }
    async pause(){
        await this.playerBtn.hover()
        await this.pauseBtn.click()
    }
    async resume(){
        await this.playerBtn.hover()
        await this.playBtn.click()
    }
    async getAudioVolume(){
        const volume = await this.audioElement.evaluate(audio=>audio.volume)
        return volume
}
}
export {Player}