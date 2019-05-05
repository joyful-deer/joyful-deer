import styled from 'styled-components'
import colors from '../colors'

const H1 = styled.h1`
  display: flex;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: bold;
  font-size: 70px;
  line-height: 70px;
  color: ${colors.slategray};
  margin: 30px 10px;
  text-align: center;

  @media (max-width: 700px) {
    font-size: 40px;
    line-height: 40px;
  }
`

export default H1
