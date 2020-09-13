import fs from 'fs'

export const scrabbleWords: string[] = fs.readFileSync('./data/scrabble.txt').toString().split(/\s/)
