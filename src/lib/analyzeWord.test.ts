import { analyzeWord } from './analyzeWord'

describe('analyzeWord', () => {
  it('should return useful information about the word and its distinct letters', () => {
    expect(analyzeWord('VIRTUAL')).toEqual({
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
