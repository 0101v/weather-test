import styled from 'styled-components'


export const WeatherBlockComponent = styled.div`
  display: flex;
  flex-direction: row;
  background: #323a4d;
  opacity: .8;
  position: absolute;
  bottom: 0px;
  width: 100%;
  align-items: center;
  user-select: none;
  @media (max-width: 500px) {
    position: static;
    flex-direction: column;
    margin-top: 10px;
  }
`
export const TodayComponent = styled.div`
  display: flex;
  color: white;
  width: 28%;
  @media (max-width: 500px) {
    width: 80%;
  }
  
`
export const TodayImg = styled.img`
  width: 30vh;
`
export const TodayTitle = styled.div`
  background: #465366;
  border-radius: 10px;
  width: 12vh;
  text-align: center;
  font-size: 3vh;
  
  
`
export const TodayTemp = styled.div`
  font-size: 8vh;
`
export const TodayBlock = styled.div`
  margin: auto 0;
  
`
export const TommorowComponent = styled.div`
  width: 12%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: unsafe center;
  @media (max-width: 500px) {
    width: 25%;
    flex-direction: row;
  }
  
  
`
export const TommorowTitle = styled.div`
  background: #465366;
  border-radius: 10px;
  width: 5vh;
  text-align: center;
  font-size: 2vh;
  
`
export const TommorowImg = styled.img`
  width: 10vh;
  
`
export const TommorowTemp = styled.div`
  font-size: 3vh;
`