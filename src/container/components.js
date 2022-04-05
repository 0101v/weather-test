import styled from 'styled-components'

export const ContainerComponent = styled.div`
  background: url('/images/1025.jpg');
  background-size: cover;
  height: 80vh;
  margin: 10vh 20vh;
  box-shadow: -3px 4px 46px 10px #000000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  @media (max-width: 1170px) {
    margin-left: 0;
    margin-right: 0;
    width: 100%;
  }
  @media (max-width: 750px) {
    height: 100%;
  }
  @media (max-width: 550px) {
    margin: 0;
  }
`