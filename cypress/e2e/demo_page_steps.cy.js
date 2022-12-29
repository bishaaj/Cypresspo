import { DemoPage } from "../pages/demoPage";
import {HomePage} from "../pages/homePage"

const demoPage = new DemoPage()
const homePage = new HomePage()

it('verify that all functional element on Demo page are interactible', () => {
    homePage.click_on_cta_demos_navigation()
    demoPage.click_web_cta_from_subnavs()    
    demoPage.verify_demo_page_title()
})