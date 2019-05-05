import React from 'react'
import Helmet from 'react-helmet'
import styled, { createGlobalStyle } from 'styled-components'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Header from './header'
import colors from '../colors'
import loadingCSS from '../loading.css'

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: 'Open Sans', sans-serif;
  color: ${colors.font};
  background-color: ${colors.background};
}
`

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px 0;

  @media (max-width: 700px) {
    margin: 50px 0;
  }
`

const Footer = styled.footer`
  background-color: ${colors.cadetgray};
  height: 70px;
  padding: 20px 30px;
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin-bottom: 0px;
`

const Quote = styled.div`
  display: flex;
  font-style: italic;
  font-family: 'Open Sans', sans-serif;
  color: ${colors.white};
  margin: 0 auto;
  height: 100%;
  align-items: center;
  justify-content: center;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet>
          <link rel="stylesheet" type="text/css" src={loadingCSS} />
          <link rel="logo" href="imges/favicon.ico" type="image/x-icon" />
        </Helmet>
        <GlobalStyle />
        <Header
          siteTitle={data.site.siteMetadata.title}
          description={data.site.siteMetadata.description}
        />
        <main>
          <Container>{children}</Container>
        </main>
        <Footer>
          <Quote>{'"One swallow does\'t make a summer"'}</Quote>
        </Footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
