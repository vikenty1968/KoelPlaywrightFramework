class Sidebar{
    constructor(page){
        this.page =page
        this.allSongsLink=page.getByRole('link',{name:'All Songs'})
    }
    async openAllSongs(){
        await this.allSongsLink.click()

    }
}
export {Sidebar}