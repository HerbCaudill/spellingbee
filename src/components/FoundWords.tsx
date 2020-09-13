import React from 'react'

export const FoundWords = ({ words }: { words: string[] }) => {
  return (
    <div>
      words:
      {words.map((word, i) => (
        <p key={i}>{word}</p>
      ))}
    </div>
  )
}
