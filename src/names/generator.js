import ANIMALS from './animals'
import MOODS from './moods'
import FRUITS from './fruits'
import COLORS from './colors'
import { getRandomInt } from '../utils'

export default function() {
  const prefixes = [MOODS, COLORS]
  const postfixes = [ANIMALS, FRUITS]

  const prefixList = prefixes[getRandomInt(2)]
  const postfixList = postfixes[getRandomInt(2)]

  const prefix = prefixList[getRandomInt(prefixList.length)]
  const postfix = postfixList[getRandomInt(postfixList.length)]

  return `${prefix}-${postfix}`
}
