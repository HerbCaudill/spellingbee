import { commonWords } from './commonWords'
import { WordAnalysis, analyzeWord } from './analyzeWord'

export const spellingBeeWords: AnalyzedWordList = commonWords.reduce((result, word) => {
  const analyzedWord = analyzeWord(word)
  if (analyzedWord.length >= 4 && analyzedWord.distinct <= 7) {
    result[word] = analyzedWord
  }
  return result
}, {} as AnalyzedWordList)

export type AnalyzedWordList = { [word: string]: WordAnalysis }
