import styled, { keyframes } from 'styled-components'

const blinkCaret = keyframes`
  from, to { border-bottom: solid 1px #DCDCDC; }
  50% { border-bottom: solid 1px white;}
`
export const PlaceComponent = styled.div`
  user-select: none;
  @media (max-width: 500px) {
    margin-top: 10px;
  }
`
export const City = styled.input`
  font-size: 32px;
  text-align: right;
  color: white;
  text-shadow: 1px 1px 1px #000;
  background: transparent;
  border: none;
  outline: none;
//   animation:
//     ${blinkCaret} .5s step-end infinite;
  @media (max-width: 800px) {
    text-align: left;
  }
  @media (max-width: 500px) {
    font-size: 24px;
  }
`
export const Country = styled.div`
  font-size: 18px;
  text-align: right;
  @media (max-width: 800px) {
    text-align: left;
  }
`
export const SwitchBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  @media (max-width: 800px) {
    justify-content: flex-start;
    margin-right: 0px;
  }
`
export const Wrapper = styled.div`
  display: flex;
  @media (max-width: 540px) and (max-height: 915px) {
    justify-content: space-between;
  }
`
