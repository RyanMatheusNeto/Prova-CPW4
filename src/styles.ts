import styled from 'styled-components'

export const ButtonPanel = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`
export const ColorButton = styled.input.attrs({ type:'range'})`
margin: 0;
width: 100px;
margin-right:20px;
`


export const ColorValueButton = styled.button` 
  margin: 0 10px;
  width: 200px;
  background-color: #2d55ff;
  color: black;
  font-size: 24px;
  font-family: 'bold';
  padding: 20px 10px;
  border: none;
  border-radius: none;
  cursor: pointer;
`
