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
    margin-top: 7vh;
  }
`
export const TodayComponent = styled.div`
  display: flex;
  color: white;
  width: 28%;
  @media (max-width: 500px) {
    justify-content: center;
    width: 100%;
    margin-top: -5vh;
    margin-bottom: -6vh;
    margin-left: -6vh;
  }
`
export const TodayImg = styled.img`
  width: 30vh;
`
export const TodayTitle = styled.div`
  background: #465366;
  border-radius: 10px;
  width: 105%;
  text-align: center;
  font-size: 3vh;
  @media (max-width: 500px) {
    font-size: 2vh;
  }
  
`
export const TodayTemp = styled.div`
  font-size: 8vh;
  @media (max-width: 500px) {
    font-size: 6vh;
    text-align: center;
  }
`
export const TodayBlock = styled.div`
  margin: auto 0;
  
`
export const TommorowBlock = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 500px) {
    width: 35%;
    flex-direction: column;
  }
`
export const TommorowComponent = styled.div`
  width: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: unsafe center;
  @media (max-width: 500px) {
    width: 35%;
    flex-direction: row;
  }
  
  
`
export const TommorowTitle = styled.div`
  background: #465366;
  border-radius: 10px;
  width: 6vh;
  text-align: center;
  font-size: 2vh;
  @media (max-height: 570px) {
    font-size: 3vh;
  }
`
export const TommorowImg = styled.img`
  width: 10vh;
  
`
export const TommorowTemp = styled.div`
  font-size: 3vh;
  @media (max-height: 570px) {
    font-size: 4vh;
  }
`