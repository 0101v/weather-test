import styled from 'styled-components'

export const PlaceComponent = styled.div`
  color: white;
  user-select: none;
  @media (max-width: 500px) {
    margin-top: 10px;
  }
`
export const City = styled.input`
  font-size: 32px;
  text-align: right;
  color: white;
  background: transparent;
  border: none;
  outline: none;
  border-bottom: solid 1px white;
  @media (max-width: 800px) {
    text-align: left;
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
  margin-right: -20px;
  @media (max-width: 800px) {
    justify-content: flex-start;
    margin-right: 0px;
    margin-left: -25px;
  }
`