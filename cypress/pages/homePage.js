const pageTitle = ('#ContentPlaceholder1_C425_Col02')
const demos = ('#js-tlrk-nav')

export class HomePage {

    verify_page_title() {
        cy.fixture('testData')
            .then((data)=> {
              cy .get(pageTitle)
                   .contains('Modern UI Made Easy')
                     .should('have.text', data.homepageTitle)
        })        
    }

    click_on_cta_demos_navigation() {
        cy.get(demos)
           .contains('Demos')
            .click()
    }


}

