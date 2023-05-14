describe('Visit Countrypedia website', () => {
  it('should visit the homepage and assert a condition', () => {
    cy.visit('https://')
    cy.contains('Welcome to Example').should('be.visible')
  })
})
