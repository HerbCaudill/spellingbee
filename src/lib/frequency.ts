import fs from 'fs'
import path from 'path'

export const frequency: FrequencyMap = fs
  .readFileSync(path.join(__dirname, '../data/norvig.txt'))
  .toString()
  .split('\n')
  .map((l: string) => l.split('\t'))
  .reduce((result, [word, frequency]) => {
    result[word] = Number(frequency)
    return result
  }, {} as FrequencyMap)

type FrequencyMap = { [word: string]: number }
