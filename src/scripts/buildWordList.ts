import fs from 'fs'
import path from 'path'
import { spellingBeeWords } from '../lib/spellingBeeWords'

fs.writeFileSync(path.join(__dirname, '../data/words.json'), JSON.stringify(spellingBeeWords), {})
