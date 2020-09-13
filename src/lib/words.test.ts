import { words } from './words'

describe('words', () => {
  it('should contain common words', () => {
    expect(words).toContain('THE')
    expect(words).toContain('HOUSE')
    expect(words).toContain('IS')
    expect(words).toContain('PRETTY')
  })

  // it('should have the expected length', () => {
  //   expect(commonWords).toHaveLength(62880)
  // })
})
