export const distinctLetters = (word: string): string[] =>
  Array.from(new Set<string>(word.split(''))).sort()
