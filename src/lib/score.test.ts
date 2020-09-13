import { score } from './score'

describe('score', () => {
  it('should work', () => {
    expect(score('TAIL')).toBe(1)
    expect(score('TRIAL')).toBe(5)
    expect(score('NOMINEE')).toBe(7)
    expect(score('SIMULATION')).toBe(10)
    expect(score('NEUROTOXINS')).toBe(11) 
    expect(score('VIRTUAL')).toBe(14) // pangram
  })
})



