import styled from 'styled-components'

export const Wrapper = styled.div`
  color: white;
  font-size: 36px;
  text-align: center;
  max-width: 260px;
  @media (max-width: 800px) {
    margin-top: 10px;
    max-width: none;
  }
  @media (max-width: 500px) {
    font-size: 24px;
  }
  `