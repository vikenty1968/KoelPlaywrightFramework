import { expect } from "@playwright/test"

class HomePage{
    constructor(page){
        this.page = page
        this.logOut =page.getByTestId('btn-logout')
    }
   
}
export {HomePage}