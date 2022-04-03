import styled from 'styled-components'

export const HeaderComponent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5vh;
  user-select: none;
  @media (max-width: 800px) {
    display: block;
    padding: 1vh 5vh;
  }
`