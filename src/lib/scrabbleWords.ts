import fs from 'fs'
import path from 'path'

export const scrabbleWords: string[] = fs
  .readFileSync(path.join(__dirname, '../data/sources/en/valid.txt'))
  .toString()
  .split(/\s/)
