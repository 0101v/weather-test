import styled from 'styled-components'

export const HeaderComponent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5vh;
  padding-bottom: 2vh;
  user-select: none;
  @media (max-width: 800px) {
    display: block;
    padding: 1vh 5vh;
  }
`
export const BlockLeft = styled.div`
  display: flex;
  flex-direction: column;
`
export const BlockRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`