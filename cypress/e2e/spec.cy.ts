describe('Visit Countrypedia website', () => {
  it('should visit the homepage', () => {
    cy.visitWebsite()
  })
})

describe('Country Cards Count Test', () => {
  it('should count the number of Country Cards elements on the page', () => {
    cy.visitWebsite()
    cy.get('a')
      .its('length')
      .then((count) => {
        expect(count).to.equal(250)
        cy.log(`Number of anchor tags: ${count}`)
      })
  })
})

describe('Search and Select functionality', () => {
  beforeEach(() => {
    cy.visitWebsite()
  })

  it('should search for "Ireland" and find a matching card with the correct attributes', () => {
    cy.searchAndAssertCountry('IRL', 'Ireland', 'https://flagcdn.com/ie.svg')
  })
})

describe('Search and Select a Different Country', () => {
  beforeEach(() => {
    cy.visitWebsite()
  })

  it('should search for "Brazil" and find a matching card with the correct attributes', () => {
    cy.searchAndAssertCountry('BRA', 'Brazil', 'https://flagcdn.com/br.svg')
  })
})

describe('Search and click and Go Back', () => {
  beforeEach(() => {
    cy.visitWebsite()
  })

  it('should search for "Ireland", find a matching card, click it, navigate to the country page, click the back button, and navigate to the home page', () => {
    cy.searchAndAssertCountry('IRL', 'Ireland', 'https://flagcdn.com/ie.svg')
    cy.clickCountryCard('IRL', 'https://distilled-countrypedia.vercel.app/irl')
    cy.get('a.page_goBackLink__piZpn').click()
    cy.url().should('eq', 'https://distilled-countrypedia.vercel.app/')
  })
})

describe('Border country presence test', () => {
  beforeEach(() => {
    cy.visitWebsite()
  })

  it('should check if the border country "United Kingdom" is present and navigate to the expected URL', () => {
    cy.searchAndAssertCountry(
      'GBR',
      'United Kingdom',
      'https://flagcdn.com/gb.svg',
    )
    cy.clickCountryCard('GBR', 'https://distilled-countrypedia.vercel.app/gbr')
  })
})
export {}
