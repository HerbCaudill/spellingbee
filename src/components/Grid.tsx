import React from 'react'
import { Hexagon } from './Hexagon'

type GridProps = {
  keyLetter: string
  otherLetters: string[]
  scale: number
}

export const Grid = ({ keyLetter, otherLetters, scale }: GridProps) => {
  const position = (i: number) => {
    const [x, y] = hexagonVertices[i]
    return { x: x * scale, y: y * scale }
  }

  const size = scale * 6
  return (
    <div className="m-auto relative" style={{ height: size, width: size }}>
      {otherLetters.map((letter, i) => (
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
