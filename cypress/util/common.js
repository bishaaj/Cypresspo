

const common = {
    page_title() {
        cy.url().should('include', 'telerik')
    }



}
module.exports = { common };