describe('Home Page Spec', () => {
  beforeEach(() => {
    cy.visit('')
  })

  it('deve renderizar corretamente', () => {
    const red = 255;
    const green = 255;
    const blue = 255;
    const alpha = 1;

    cy.get('[data-cy="button-red"]').invoke('val', red).trigger('input')
    cy.get('[data-cy="button-green"]').invoke('val', green).trigger('input')
    cy.get('[data-cy="button-blue"]').invoke('val', blue).trigger('input')
    cy.get('[data-cy="button-alpha"]').invoke('val', alpha).trigger('input')

    const colorValue = cy.get('[data-cy=view-panel]')

    colorValue.should('have.css', 'background-color', 'rgb(255, 255, 255)')
  })
})
