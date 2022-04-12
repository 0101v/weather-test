import styled from 'styled-components'


export const Wrapper = styled.div`
  margin-bottom: 5vh;
  @media (max-width: 500px) {
    font-size: 24px;
    text-align: center;
    margin-bottom: 0px;
  }
  @media (max-width: 800px) {
    text-align: center;
  }
`
export const Block = styled.div`
  text-align: center;
`
export const Time = styled.span`
  font-size: 72px;
  @media (max-width: 500px) {
    font-size: 36px;
  }
`
export const TimeDay = styled.span`
  font-size: 24px;
  margin-left: 5px;
  @media (max-width: 500px) {
    font-size: 18px;
  }
`
export const Date = styled.span`
  font-size: 32px;
  @media (max-width: 500px) {
    font-size: 24px;
  }
`