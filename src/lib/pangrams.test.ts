import { pangrams } from './pangrams'

describe('pangrams', () => {
  it('should include some known pangrams', () => {
    expect(pangrams).toContain('ACCOMMODATE')
    expect(pangrams).toContain('VIRTUAL')
    expect(pangrams).toContain('LOCOMOTION')
  })
})
