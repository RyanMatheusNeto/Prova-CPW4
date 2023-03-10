import { Alpha, Blue, Green, Red, ViewPanel} from './styles'

type Props = {
    red: number
    green: number
    blue: number
    alpha: number
  }


const Color = ({ red,green,blue,alpha }: Props) => {
  return (
    <ViewPanel data-cy='view-panel' style={{backgroundColor: `rgba(${red}, ${green}, ${blue}, ${alpha})`}}>
        <Red 
     data-cy='red-box'>
          red={red}
        </Red>
        <Green data-cy='green-box'>
          green={green}
        </Green>
        <Blue data-cy='blue-box'>
          blue={blue}
        </Blue>
        <Alpha data-cy='alpha-box'>
          alpha={alpha}
        </Alpha>
    </ViewPanel>
    

    
  
  )
}

export default Color





/*

style={{backgroundColor: `rgba(${red}, ${green}, ${blue}, ${alpha})`}}

<
<Red 
     data-cy='red-box'>
          red={red}
        </Red>
        <Green data-cy='green-box'>
          green={green}
        </Green>
        <Blue data-cy='blue-box'>
          blue={blue}
        </Blue>
        <Alpha data-cy='alpha-box'>
          alpha={alpha}
        </Alpha>













red:{red},
      green:{green},
      blue:{blue},
      alpha:{alpha}
      
       <Red data-cy='red-box'>
        Red={red}
      </Red>
      <Green data-cy='green-box'>
        Green={green}
      </Green>
      <Blue data-cy='blue-box'>
        Blue={blue}
      </Blue>
      <Alpha data-cy='alpha-box'>
        Alpha={alpha}
      </Alpha>
      
      */