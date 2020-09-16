import styled from 'styled-components'

export const Container = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
 height: 100vh;

 background-color: ${props => props.theme.colors.backgroundFront};

 main {
  width: 80vw;
  height: 80vh;
  border-radius: 30px;
  padding: 20px;
  background-color: ${props => props.theme.colors.background};
  h1 {
   width: 100%;
   text-align: center;
  }
 }
`
