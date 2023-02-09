// const pageTitle = ('#ContentPlaceholder1_C425_Col02')
// const demos = ('#js-tlrk-nav')

const { selectors } = require("../util/selectors")
const { common } = require("../util/common")

export class HomePage {

    verify_page_title() {
        cy.fixture('testData')
            .then((data)=> {
              cy .get(selectors.pageTitle)
                   .contains('Modern UI Made Easy')
                     .should('have.text', data.homepageTitle)
        })        
    }

    confirm_title() {
        common.page_title()
    }



    click_on_cta_demos_navigation() {
        cy.get(selectors.demos)
           .contains('Demos')
            .click()
    }


}

