import fs from 'fs'
import path from 'path'
import { spellingBeeWords } from '../lib/spellingBeeWords'

fs.writeFileSync(path.join(__dirname, '../data/en.json'), JSON.stringify(spellingBeeWords), {})
