import { frequency } from './frequency'

describe('frequency', () => {
  it('parses word frequences from norvig', () => {
    expect(frequency['WE']).toEqual(2057296224)
  })

  it('has the expected number of keys', () => {
    expect(Object.keys(frequency).length).toBe(97566)
  })
})
