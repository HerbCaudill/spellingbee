import { distinctLetters } from './distinctLetters'

describe.skip('distinctLetters', () => {
  it('should enumerate the unique letters within a word, in alphabetical order', () => {
    expect(distinctLetters('HALLELUJAH')).toEqual(['A', 'E', 'H', 'J', 'L', 'U'])
  })
})
