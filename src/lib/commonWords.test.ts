import { commonWords } from './commonWords'

describe.skip('commonWords', () => {
  it('should contain common words', () => {
    expect(commonWords).toContain('THE')
    expect(commonWords).toContain('HOUSE')
    expect(commonWords).toContain('IS')
    expect(commonWords).toContain('PRETTY')
  })

  it('should have the expected length', () => {
    expect(commonWords).toHaveLength(62880)
  })
})
