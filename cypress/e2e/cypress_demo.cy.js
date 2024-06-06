import {faker} from '@faker-js/faker'


it('Sign up page',  () => {

    cy.visit('https://qa-practice.netlify.app/')
   
    // Assert url
    cy.url().should('eq', 'https://qa-practice.netlify.app/')

    // Assert Welcome! in element found
    cy.get(".display-4").contains("Welcome!")

    // click on the Forms dropdownn
  cy.get('#forms').scrollIntoView().should('be.visible').click({force:true})

    // Click on Login options from Forms dropdown
    cy.get('#login:nth-child(1)').scrollIntoView().should('be.visible').click({force:true})

    // Enter email as suggested
    cy.get('#email').type('admin@admin.com')

    // Enter password as suggest
    cy.get('#password').type('admin123')

    // Click on submit button
    cy.get('#submitLoginBtn').click()

    // Click on Iphone add to cart button
    cy.get(':nth-child(1) > .shop-item-details > .btn').click()

    // Click on Remove from cart button
    cy.get('.cart-quantity > .btn').click()

    // Assert Remove button element is not exist on the 
    cy.get('.cart-quantity > .btn').should('not.exist')

    // View see if button is 
    cy.wait(2000)
})