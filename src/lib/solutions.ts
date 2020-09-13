import { distinctLetters } from './distinctLetters'
import _words from '../data/words.json'
import { AnalyzedWordList } from './spellingBeeWords'
const words = _words as AnalyzedWordList

export const solutions = (letters: string) => {
  if (letters.length !== 7) throw new Error('A game has exactly 7 letters')
  if (distinctLetters(letters).length !== 7) throw new Error('All 7 letters must be distinct')
  const keyLetter = letters[0]
  const allWords = Object.keys(words)
  return allWords.filter(
    w => words[w].has[keyLetter] && w.split('').every(l => letters.includes(l))
  )
}
