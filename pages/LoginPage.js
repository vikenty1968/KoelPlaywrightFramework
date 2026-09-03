class LoginPage{
    constructor(page){
        this.page =page
        this.email = page.locator("[type='email']");
        this.password = page.locator("[type='password']")
        this.login= page.getByRole('button',{name:'Log In'})
    }
    async loginUser(email,password){
       await this.email.fill(email)
       await this.password.fill(password)
       await this.login.click()
    }
}
export {LoginPage}