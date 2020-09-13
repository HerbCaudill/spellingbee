import { distinctLetters } from './distinctLetters'
import words from '../data/en.json'

export const solutions = (letters: string) => {
  if (letters.length !== 7) throw new Error('A game has exactly 7 letters')
  if (distinctLetters(letters).length !== 7) throw new Error('All 7 letters must be distinct')
  const keyLetter = letters[0]
  return words.filter(w => w.includes(keyLetter) && w.split('').every(l => letters.includes(l)))
}
