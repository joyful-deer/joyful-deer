import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Image from '../components/image'
import Layout from '../components/layout'
import H1 from '../components/H1'
import { getRandomInt } from '../utils'
import bear from '../images/noun_Bear_2396954_000000.svg'
import cat from '../images/noun_Cat_2396951_000000.svg'
import lion from '../images/noun_Lion_2396984_000000.svg'
import mongoose from '../images/noun_Mongoose_1951428_000000.svg'
import monkey from '../images/noun_Monkey_1951430_000000.svg'
import zepra from '../images/noun_Zepra_1951445_000000.svg'
import panda from '../images/noun_Panda_1951473_000000.svg'
import penguin from '../images/noun_Penguin_1951461_000000.svg'
import rabbit from '../images/noun_Rabbit_2396952_000000.svg'

const animalsMap = [
  { image: bear, name: 'surprised bear' },
  { image: cat, name: 'neutral cat' },
  { image: lion, name: 'happy lion' },
  { image: mongoose, name: 'content mongoose' },
  { image: monkey, name: 'dumb monkey' },
  { image: panda, name: 'sad panda' },
  { image: penguin, name: 'puffy penguin' },
  { image: rabbit, name: 'quilty rabbit' },
  { image: zepra, name: 'hungry zepra' },
]

const P = styled.p`
  padding-bottom: 20px;
`

const NotFoundPage = () => {
  const [animal, setAnimal] = useState(
    animalsMap[getRandomInt(animalsMap.length)]
  )

  useEffect(() => {
    setAnimal(animalsMap[getRandomInt(animalsMap.length)])
  })

  return (
    <Layout>
      <H1>There is nothing here</H1>
      <Image src={animal.image} />
      {animal && <P>But have a {animal.name} instead</P>}
    </Layout>
  )
}

export default NotFoundPage
