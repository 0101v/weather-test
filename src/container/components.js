import styled from 'styled-components'

export const ContainerComponent = styled.div`
  background: url('/images/1025.jpg');
  background-size: cover;
  position: relative;
  height: 80vh;
  margin: 10vh 20vh;
  box-shadow: -3px 4px 46px 10px #000000;
  @media (max-width: 500px) {
    margin: 0;
    height: 100%;
  }
  @media (max-width: 1120px) {
    margin-left: 0;
    margin-right: 0;
    width: 100%;
  }
  @media (max-height: 570px) {
    margin: 0;
    height: 100vh;
  }
  @media (max-height: 470px) {
    margin: 0;
    height: 470px;
  }
`