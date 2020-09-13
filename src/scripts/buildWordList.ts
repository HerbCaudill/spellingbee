import fs from 'fs'
import path from 'path'
import { words } from '../lib/words'

fs.writeFileSync(path.join(__dirname, '../data/en.json'), JSON.stringify(words), {})
