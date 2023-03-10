import Color from '.'
import FontStyles from '../../assets/fonts/fonts'

describe('<Counter />', () => {
  it('should render correct cor', () => {
    const value = 21
    cy.mount(
      <>
        <FontStyles />
        <Color
         red={red}
         green={green}
         blue={blue}
         alpha={alpha}
      />
      
      </>
    )

    const counterValue = cy.get('[data-cy="counter-value"]')
    
    counterValue.should('have.css', 'color', 'rgb(255, 255, 255)')
  })
})