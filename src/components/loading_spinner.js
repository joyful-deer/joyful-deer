import React from 'react'
import styled from 'styled-components'

const Img = styled.img`
  display: flex;
  width: 40px;
  animation-delay: ${props => props.delay}s !important;
  padding: 5px;
`
const ImageContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin: 30px 0;
`

const LoadingSpinner = () => (
  <ImageContainer>
    <Img src='images/noun_Cat_2396951_000000.svg' className="ld ld-bounce" delay={-0.0} />
    <Img src='images/noun_Bear_2396954_000000.svg' className="ld ld-bounce" delay={-0.05} />
    <Img src='images/noun_Panda_1951473_000000.svg' className="ld ld-bounce" delay={-0.1} />
    <Img src='images/noun_Lion_2396984_000000.svg' className="ld ld-bounce" delay={-0.15} />
    <Img src='images/noun_Monkey_1951430_000000.svg' className="ld ld-bounce" delay={-0.2} />
  </ImageContainer>
)

export default LoadingSpinner
