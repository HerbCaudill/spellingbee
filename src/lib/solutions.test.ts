import { solutions } from './solutions'

describe('solutions', () => {
  it('TVIRUAL', () => {
    const words = solutions('TVIRUAL')

    expect(words).not.toContain('BANANA')
    expect(words).toContain('VIRTUAL')
    expect(words).toContain('TRIVIA')
    expect(words).toContain('TARTAR')
    expect(words).not.toContain('ALLUVIAL') // doesn't have T
  })

  it('VTIRUAL', () => {
    const words = solutions('VTIRUAL')

    expect(words).not.toContain('BANANA')
    expect(words).toContain('VIRTUAL')
    expect(words).toContain('TRIVIA')
    expect(words).not.toContain('TARTAR') // doesn't have V
    expect(words).toContain('ALLUVIAL')
  })
})
