import React from 'react'
import { Hexagon } from './Hexagon'

export const Grid = ({
  keyLetter,
  displayLetters,
  scale,
}: {
  keyLetter: string
  displayLetters: string[]
  scale: number
}) => {
  const position = (i: number) => {
    const SQRT_3 = Math.sqrt(3)
    const hexagonVertices = [
      [2, SQRT_3],
      [1, 0],
      [3, 0],
      [4, SQRT_3],
      [3, 2 * SQRT_3],
      [1, 2 * SQRT_3],
      [0, SQRT_3],
    ]

    const [x, y] = hexagonVertices[i]
    return { x: x * scale, y: y * scale }
  }

  const size = scale * 6
  return (
    <div className="m-auto relative" style={{ height: size, width: size }}>
      {displayLetters.map((letter, i) => (
        <Hexagon
          key={i}
          scale={scale}
          position={position(i + 1)}
          letter={letter}
          highlight={false}
        />
      ))}
      <Hexagon //
        scale={scale}
        position={position(0)}
        letter={keyLetter}
        highlight={true}
      ></Hexagon>
    </div>
  )
}
