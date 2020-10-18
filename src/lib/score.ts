import { isPangram } from './isPangram'

export const score = (word: string) => {
  if (word.length < 4) return 0
  if (word.length === 4) return 1
  const bonus = isPangram(word) ? 7 : 0
  return word.length + bonus
}
