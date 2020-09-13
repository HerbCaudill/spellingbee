import { spellingBeeWords } from './spellingBeeWords'

describe('spellingBeeWords', () => {
  it('should only contain words more than 3 letters long', () => {
    expect(spellingBeeWords.A).toBeUndefined()
    expect(spellingBeeWords.ANY).toBeUndefined()
    expect(spellingBeeWords.DOE).toBeUndefined()
  })

  it('should not contain words with more than 7 distinct letters', () => {
    expect(spellingBeeWords.SURREPTITIOUS).toBeUndefined()
    expect(spellingBeeWords.XENOPHOBIA).toBeUndefined()
    expect(spellingBeeWords.ZOOPLANKTON).toBeUndefined()
  })

  it('should contain analysis for words that are included', () => {
    expect(spellingBeeWords.VIRTUAL).toEqual({
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
