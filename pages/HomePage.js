import { expect } from "@playwright/test"

class HomePage{
    constructor(page){
        this.page = page
        this.logOut =page.getByTestId('btn-logout')
        this.searchField = page.getByPlaceholder('Press F to search')

        
    }
   
   
}
export {HomePage}