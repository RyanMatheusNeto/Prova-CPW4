import ColorPanel from '.'
import FontStyles from '../../assets/fonts/fonts'

describe('<Counter />', () => {
  it('should render correct cor', () => {
    //const value = 255,
    const red = 1;
    const green = 255;
    const blue = 255;
    const alpha = 1;

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
    
    colorValues.should('have.css', 'background-color', 'rgb(1, 255, 255)')
  })
})