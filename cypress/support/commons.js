const cookies = ('#onetrust-banner-sdk')

beforeEach(() =>{
    cy.visit('/')
});

Cypress.Commands.add('acceptCookies', cookiesNotification => {
    // cy.origin('https://www.bbc.com', () => {

    // cy.get('#bbccookies-continue-button > [data-region-filter="eu"]')
    //    .contains('Yes, I agree')
    //     .click()
    // })   
    
    cy.get(cookies)
       .contains('Accept and Close')
        .click()
});