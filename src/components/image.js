import React from 'react'
import Proptypes from 'prop-types'
import styled from 'styled-components'
import colors from '../colors'

const Img = styled.img`
  display: flex;
  width: 200px;
  margin: 0 auto;
  fill: ${colors.slategray};
`
const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`

const Image = ({ src }) => (
  <ImageContainer>
    <Img src={src} />
  </ImageContainer>
)

Image.propTypes = {
  src: Proptypes.string.isRequired,
}

export default Image
