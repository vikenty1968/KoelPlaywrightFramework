import{test as base, expect}from"@playwright/test"
import { LoginPage } from "../pages/LoginPage.js"
import { HomePage } from "../pages/HomePage.js"
import { SearchPage } from "../pages/SearchPage.js"
import { Player } from "../components/Player.js"

const test =base.extend({
    loginPage:async({page},use)=>{
       const loginPage = new LoginPage(page)
       await use(loginPage)
    },
    homePage: async({page},use)=>{
       const homePage = new HomePage(page)
       await use(homePage)
    },
    searchPage:async({page},use)=>{
       const searchPage = new SearchPage(page)
       await use(searchPage)},
     player: async ({page},use)=>{
       const player = new Player(page)  
       await use(player) 
     }  

    

})
export {test,expect}