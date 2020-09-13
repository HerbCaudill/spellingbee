import _words from '../data/words.json'
import { AnalyzedWordList } from './spellingBeeWords'
const words = _words as AnalyzedWordList

export const pangrams = Object.keys(words).filter(word => words[word].distinct === 7)
