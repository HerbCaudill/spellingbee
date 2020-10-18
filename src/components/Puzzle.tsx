import React from 'react'
import { Hexagon } from './Hexagon'

export const Puzzle = ({
  keyLetter,
  displayLetters,
}: {
  keyLetter: string
  displayLetters: string[]
}) => {
  return (
    <div className="m-auto max-w-xs border border-gray-200 relative">
      <div style={{ padding: '50%' }}>
        {displayLetters.map((letter, i) => (
          <Hexagon key={i} position={i + 1} letter={letter} highlight={false} />
        ))}
        <Hexagon position={0} letter={keyLetter} highlight={true}></Hexagon>
      </div>
    </div>
  )
}
