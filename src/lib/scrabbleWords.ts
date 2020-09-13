import fs from 'fs'
import path from 'path'

export const scrabbleWords: string[] = fs
  .readFileSync(path.join(__dirname, '../data/en/valid.txt'))
  .toString()
  .split(/\s/)
