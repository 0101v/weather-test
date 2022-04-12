import styled from 'styled-components'

export const TodoListComponent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 500px;
  align-items: center;
  @media (max-width: 750px) {
    max-width: 490px;
    margin: auto;
  }
  @media (max-width: 500px) {
    padding-top: 2vh;
    width: 100%;
    min-width: 200px;
    padding: 1vh;
    margin: auto;
  }
`
export const InfoBlock = styled.div`
  display: flex;
`
export const Time = styled.div`
  background: #465366;
  border-radius: 10px;
  width: 45px;
  text-align: center;
  margin: auto;
`
export const Text = styled.div`
  margin-left: 10px;
  font-size: 18px;
  width: 350px;
  user-select: none;
  margin-bottom: 5px;
  
  @media (max-width: 500px) {
    width: 170px;
  }
`
export const Wrapper = styled.div`
max-width: 510px;
max-height: 150px;
margin-left: 5vh;
overflow-y: auto;
overflow-x: hidden;
border-top: 1px solid #C1C1C1;
border-bottom: 1px solid #C1C1C1;
margin: auto;
margin-bottom: 1vh;
::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-track {
  background: #C1C1C1;
}
::-webkit-scrollbar-thumb {
  background-color: white;
  border-radius: 5px;
  border: 1px solid white;
}
@media (max-width: 750px) {
  max-width: 500px;
  margin: auto;
}
@media (max-width: 500px) {
  max-width: 370px;
}
`