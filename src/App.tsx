import { useState } from 'react'
import Color from './components/ColorPanel'
import { ButtonPanel, ColorButton } from './styles'

const App = () => {
  const [red, setRed] = useState(250)
  const [green, setGreen] = useState(25)
  const [blue, setBlue] = useState(0)
  const [alpha, setAlpha] = useState(1)


  return (
    <>

      <Color
         red={red}
         green={green}
         blue={blue}
         alpha={alpha}
      />

<ButtonPanel>
  Red<ColorButton data-cy="button-red" min={0} max={255}  onInput={(event: React.ChangeEvent<HTMLInputElement>)=> setRed(Number(event.target.value))} >

  </ColorButton>
  Green<ColorButton data-cy="button-green" min={0} max={255} onInput={(event: React.ChangeEvent<HTMLInputElement>)=> setGreen(Number(event.target.value))}  >
    
  </ColorButton>
  Blue<ColorButton data-cy="button-blue" min={0} max={255} onInput={(event: React.ChangeEvent<HTMLInputElement>)=> setBlue(Number(event.target.value))}  >
    
  </ColorButton>
  Alpha<ColorButton data-cy="button-alpha" min={0} max={1} step={0.1} onInput={(event: React.ChangeEvent<HTMLInputElement>)=> setAlpha(Number(event.target.value))} >
    
  </ColorButton>
</ButtonPanel>
</>
  )
}

export default App

/*
Sc={() => setValue(min="0", max="255")}
*/
