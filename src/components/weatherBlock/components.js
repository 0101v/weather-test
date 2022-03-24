import styled from 'styled-components'


export const WeatherBlockComponent = styled.div`
  display: flex;
  // flex-direction: row;
  background: #323a4d;
  opacity: .8;
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 25vh;
  align-items: center;
`
export const TodayComponent = styled.div`
  display: flex;
  font-size: 24px;
  color: white;
  width: 28%;
  
`
export const TodayImg = styled.img`
  width: 200px;
`
export const TodayTitle = styled.div`
  background: #465366;
  border-radius: 10px;
  width: 100px;
  text-align: center;
  
  
`
export const TodayTemp = styled.div`
  font-size: 72px;
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
`
export const TommorowTitle = styled.div`
  background: #465366;
  border-radius: 10px;
  width: 50px;
  text-align: center;
`
export const TommorowImg = styled.img`
  width: 100px;
`
export const TommorowTemp = styled.div`
  font-size: 36px;
`