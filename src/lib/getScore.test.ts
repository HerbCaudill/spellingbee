import { getScore } from './getScore'

describe('score', () => {
  it('should work', () => {
    expect(getScore('TAIL')).toBe(1)
    expect(getScore('TRIAL')).toBe(5)
    expect(getScore('NOMINEE')).toBe(7)
    expect(getScore('SIMULATION')).toBe(10)
    expect(getScore('NEUROTOXINS')).toBe(11)
    expect(getScore('VIRTUAL')).toBe(14) // pangram
  })
})
