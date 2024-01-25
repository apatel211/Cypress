import landingPage from "../page/landingPage";
import loginPage from "../page/loginPage";
import homePage from "../page/homePage";
import settingPage from "../page/settingsPage";

describe('POM test ', function(){

   beforeEach(function(){
    cy.fixture('conduit').as('data')

   })
    const Landingpage = new landingPage()
    const Loginpage = new loginPage()
    const Homepage = new homePage()
    const SettingPage = new settingPage()


    it('login using POM',function(){
        cy.visit('/')
        Landingpage.clickSigninButton()
        Loginpage.enterEmail(this.data.email)
        Loginpage.enterPassword(this.data.password)
        Loginpage.clickSignInButton()
        Homepage.checkGlobalFeedIsVisible()
        Homepage.clickSettings()
        SettingPage.clickSignOutButton()
    })
})