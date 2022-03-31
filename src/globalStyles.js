import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background: url('/images/1620065577.jpg');
    height: 90vh;
    background-size: cover;
    background-position: center;
    @media (max-width: 500px) {
      background: none;
    }
  }

  #root {    
    
  }
`
