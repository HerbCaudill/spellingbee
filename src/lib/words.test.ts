import { words } from './words'

describe('words', () => {
  it('should only contain words more than 3 letters long', () => {
    expect(words.A).toBeUndefined()
    expect(words.ANY).toBeUndefined()
    expect(words.DOE).toBeUndefined()
  })

  it('should not contain words with more than 7 distinct letters', () => {
    expect(words.SURREPTITIOUS).toBeUndefined()
    expect(words.XENOPHOBIA).toBeUndefined()
    expect(words.ZOOPLANKTON).toBeUndefined()
  })

  it('should contain analysis for words that are included', () => {
    expect(words.VIRTUAL).toEqual({
      length: 7,
      distinct: 7,
      letters: ['A', 'I', 'L', 'R', 'T', 'U', 'V'],
      has: {
        V: true,
        I: true,
        R: true,
        T: true,
        U: true,
        A: true,
        L: true,
      },
    })
  })
})
