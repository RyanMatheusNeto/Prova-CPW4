import ColorPanel from '.'
import FontStyles from '../../assets/fonts/fonts'

describe('<Counter />', () => {
  it('deve renderizar transparente', () => {
    //const value = 255,
    const red = 1;
    const green = 255;
    const blue = 255;
    const alpha = 0;

    cy.mount(
      <>
        <FontStyles />
        <ColorPanel 
         red={red}
         green={green}
         blue={blue}
         alpha={alpha}
      />
      
      </>
    )

    

    const colorValues = cy.get('[data-cy=view-panel]')
    
    colorValues.should('have.css', 'background-color', 'rgba(1, 255, 255, 0)')
  })
})