import React from 'react'
import Image from '../components/Image'
import Layout from '../components/layout'
import H1 from '../components/H1'
import { getRandomInt } from '../utils'

const animalsMap = [
  { image: 'images/noun_Bear_2396954_000000.svg', name: 'surprised bear'},
  { image: 'images/noun_Cat_2396951_000000.svg', name: 'neutral cat'},
  { image: 'images/noun_Lion_2396984_000000.svg', name: 'happy lion'},
  { image: 'images/noun_Mongoose_1951428_000000.svg', name: 'content mongoose'},
  { image: 'images/noun_Monkey_1951430_000000.svg', name: 'dumb monkey'},
  { image: 'images/noun_Panda_1951473_000000.svg', name: 'sad panda'},
  { image: 'images/noun_Penguin_1951461_000000.svg', name: 'puffy penguin'},
  { image: 'images/noun_Rabbit_2396952_000000.svg', name: 'quilty rabbit'},
  { image: 'images/noun_Zepra_1951445_000000.svg', name: 'hungry zepra'}
]

const NotFoundPage = () => {
  const animal = animalsMap[getRandomInt(animalsMap.length)]
  return (
    <Layout>
      <H1>There is nothing here</H1>
      <Image src={animal.image}/>
      <p>But have a {animal.name} instead</p>
    </Layout>
  )
}

export default NotFoundPage
