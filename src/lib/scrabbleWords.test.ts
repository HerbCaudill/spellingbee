import { scrabbleWords } from './scrabbleWords'

describe('scrabbleWords', () => {
  it('should start out as expected', () => {
    expect(scrabbleWords.slice(0, 9)).toEqual([
      'AA',
      'AAH',
      'AAHED',
      'AAHING',
      'AAHS',
      'AAL',
      'AALII',
      'AALIIS',
      'AALS',
    ])
  })
  it('should have the expected length', () => {
    expect(scrabbleWords).toHaveLength(267752)
  })
})
