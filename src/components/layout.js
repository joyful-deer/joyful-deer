import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { createGlobalStyle } from 'styled-components'
import Header from './header'
import colors from '../colors'
import loadingCSS from '../loading.css'
import styled from "styled-components"

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
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>
            <Container>
              {children}
            </Container>
            </main>
          <footer />
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
