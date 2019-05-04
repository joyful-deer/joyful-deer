import React, { useState, useEffect } from 'react'
import generator from '../names/generator'
import Layout from '../components/layout'
import styled from 'styled-components'
import colors from '../colors'
import LoadingSpinner from '../components/loading_spinner'
import H1 from '../components/H1'

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Open Sans', sans-serif; 
  padding: 20px;
  background-color: ${colors.celadon};
  color: ${colors.slategray};
  border: none;
  font-size: 20px;
  width: 200px;
  margin-top: 40px;
  border-radius: 4px;
`

const IndexPage = () => {
  const [result, setResult] = useState('')

  useEffect(() => {
    setResult(generator())
  }, [])

  return (
    <Layout>
      {result ? <H1>{result}</H1> : <LoadingSpinner />}
      <Button onClick={() => setResult(generator())}>Next</Button>
    </Layout>
  )
}

export default IndexPage
