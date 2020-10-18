import React from 'react'
import { Polygon } from './Polygon'

export const Hexagon = ({
  position,
  letter,
  highlight,
  ...props
}: {
  position: number
  letter: string
  highlight: boolean
}) => {
  const a = 30
  const [x, y] = hexagonVertices(a)[position]
  return (
    <svg width={`33%`} className="absolute" style={{ left: y, top: x, opacity: 0.5 }} {...props}>
      <Polygon
        className={`fill-${highlight ? 'highlight' : 'other'}`}
        sides={6}
        transform={`translate(${a},${a}) scale(${a}) rotate(30)`}
      />
      {/* <text
        className="uppercase text-center text-4xl font-extrabold pointer-events-none"
        x="50%"
        y="50%"
        dy="10.75%"
        style={{ textAnchor: 'middle' }
      >
        {letter}
      </text> */}
    </svg>
  )
}
const SQRT_3 = Math.sqrt(3)

const hexagonVertices = (A: number) => [
  [2 * A, SQRT_3 * A],
  [A, 0],
  [3 * A, 0],
  [4 * A, SQRT_3 * A],
  [3 * A, 2 * SQRT_3 * A],
  [A, 2 * SQRT_3 * A],
  [0, SQRT_3 * A],
]
