const demoPageTitle = ('#ContentPlaceholder1_C321_Col01')
const subnavs = ('.NavAlt')

export class DemoPage {

    verify_demo_page_title() {
        cy.fixture('testData')
            .then((data) => {
              cy.get(demoPageTitle)
                 .contains('Demos')
                  .should('have.text', 'Demos')
            })        
    }

    click_web_cta_from_subnavs() {
        cy.get(subnavs)
           .contains('Web')
            .click()
    }


}