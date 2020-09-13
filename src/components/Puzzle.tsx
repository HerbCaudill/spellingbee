import React from 'react'

export const Puzzle = ({
  keyLetter,
  displayLetters,
}: {
  keyLetter: string
  displayLetters: string[]
}) => {
  return (
    <div>
      <b>{keyLetter}</b> {displayLetters.join('')}
    </div>
  )
}
