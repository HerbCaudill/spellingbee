import { frequency, MAX_VOCABULARY } from './frequency'

describe('frequency', () => {
  it('parses word frequencies', () => {
    expect(frequency['WE']).toEqual(2057296224)
  })

  it('has the expected number of keys', () => {
    expect(Object.keys(frequency).length).toBe(MAX_VOCABULARY)
  })
})
