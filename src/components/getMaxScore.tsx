import { getScore } from '../lib/getScore'
import { getSolutions } from '../lib/getSolutions'
import { sum } from './sum'

export const getMaxScore = (letters: string) => {
  const solutions = getSolutions(letters)
  const maxScore = sum(solutions.map(getScore))
  return maxScore
}
