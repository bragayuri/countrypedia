/// <reference types="cypress" />
/// Define a custom command to visit the website
declare global {
  namespace Cypress {
    interface Chainable<Subject> {
      visitWebsite(): Chainable<Window>
      searchAndAssertCountry(
        countryCode: string,
        countryName: string,
        flagUrl: string,
      ): Chainable<Element>
      clickCountryCard(
        countryCode: string,
        expectedUrl: string,
      ): Chainable<Element>
    }
  }
}


Cypress.Commands.add('visitWebsite', () => {
  cy.visit('/')
  cy.contains('Countrypedia').should('be.visible')
})

// Define a custom command to search for a country and assert its attributes
Cypress.Commands.add(
  'searchAndAssertCountry',
  (countryCode, countryName, flagUrl) => {
    cy.get('#search-input').type(countryName)
    cy.wait(2000)
    cy.get(`a#${countryCode}`)
      .find('img')
      .should('have.attr', 'alt', `${countryName}`)
      .and('have.attr', 'src', `${flagUrl}`)
  },
)

// Define a custom command to click on a country card and assert the URL
Cypress.Commands.add('clickCountryCard', (countryCode, expectedUrl) => {
  cy.get(`a#${countryCode}`).click()
  cy.url().should('eq', expectedUrl)
})

export {}

