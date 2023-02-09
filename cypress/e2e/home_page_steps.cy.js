import {HomePage} from "../pages/homePage"
import { DemoPage } from "../pages/demoPage"

const homePage = new HomePage()
const demoPage = new DemoPage()

it('Progress Telerik homepage', () => {

   cy.acceptCookies()  
   homePage.verify_page_title() 
   homePage.confirm_title()
   cy.checkAccessibility()  
//   cy.percySnapshot(); 

})

it('Click on Demos cta', () => {
    homePage.click_on_cta_demos_navigation()
    demoPage.verify_demo_page_title()
})




