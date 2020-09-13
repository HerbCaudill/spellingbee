import { distinctLetters } from './distinctLetters'

export const analyzeWord = (word: string) => {
  const length = word.length
  const letters = distinctLetters(word)
  const distinct = letters.length
  const has: PresenceMap = letters.reduce(
    (result, letter) => ({
      ...result,
      [letter]: true,
    }),
    {} as PresenceMap
  )
  return { length, distinct, letters, has }
}

export type PresenceMap = { [letter: string]: boolean }

export type WordAnalysis = {
  length: number
  distinct: number
  letters: string[]
  has: PresenceMap
}
