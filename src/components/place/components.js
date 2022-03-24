import styled from 'styled-components'


export const PlaceComponent = styled.div`
  color: white;
  user-select: none;
  @media (max-width: 500px) {
    margin-top: 10px;
  }
`
export const City = styled.div`
  font-size: 32px;
  text-align: right;
  @media (max-width: 500px) {
    text-align: left;
  }
`
export const Country = styled.div`
  font-size: 18px;
  text-align: right;
  @media (max-width: 500px) {
    text-align: left;
  }
`