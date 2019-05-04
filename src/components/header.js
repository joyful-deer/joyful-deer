import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import colors from '../colors'

const StyledHeader = styled.header`
  background: ${colors.tealdeer};
  marginbottom: 1.45rem;
`
const HeaderContainer = styled.div`
  margin: 0 auto;
  maxwidth: 960;
  padding: 1.45rem 1.0875rem;
`
const H1 = styled.h1`
  margin: 0;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: bold;
`

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`
const SmallPrint = styled.div`
  color: ${colors.slategray};
  font-style: italic;
`

const Header = ({ siteTitle, description }) => (
  <StyledHeader>
    <HeaderContainer>
      <H1>
        <StyledLink to="/">{siteTitle}</StyledLink>
      </H1>
      <SmallPrint>{description}</SmallPrint>
    </HeaderContainer>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
  description: '',
}

export default Header
