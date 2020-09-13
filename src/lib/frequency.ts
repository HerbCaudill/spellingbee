import fs from 'fs'
import path from 'path'

export const MAX_VOCABULARY = 60000

export const frequency: FrequencyMap = fs
  .readFileSync(path.join(__dirname, '../data/en/frequency.txt'))
  .toString()
  .split('\n')
  .slice(0, MAX_VOCABULARY)
  .map((l: string) => l.split('\t'))
  .reduce((result, [word, frequency]) => {
    result[word] = Number(frequency)
    return result
  }, {} as FrequencyMap)

type FrequencyMap = { [word: string]: number }
