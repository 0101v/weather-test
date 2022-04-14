import { createGlobalStyle } from 'styled-components'


export default createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background: url(${({image}) => image});
    height: 90vh;
    background-size: cover;
    background-position: center;
    color: white;
    text-shadow: 2px 1px 2px #000;
    @media (max-width: 800px) {
      height: 100%;
    }
  }

  #root {    
    
  }
`
