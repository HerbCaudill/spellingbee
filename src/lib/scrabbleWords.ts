import fs from 'fs'
import path from 'path'

export const scrabbleWords: string[] = fs
  .readFileSync(path.join(__dirname, '../data/scrabble.txt'))
  .toString()
  .split(/\s/)
