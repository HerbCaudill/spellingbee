import { isPangram } from './isPangram'
import { words } from './words'

export const pangrams = words.filter(isPangram)
