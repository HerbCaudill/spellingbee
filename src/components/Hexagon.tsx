import React from 'react'
import { Polygon } from './Polygon'

export const Hexagon = ({
  position: { x, y },
  letter,
  highlight,
  scale,
  ...props
}: {
  position: Position
  letter: string
  scale: number
  highlight: boolean
}) => {
  const fill = `fill-${highlight ? 'highlight' : 'other'}`
  const offset = scale * 0.25
  const textScale = 0.75
  const border = 0.34
  return (
    <svg
      className="absolute"
      width={(scale + offset) * 2}
      height={scale * 2}
      viewBox={`${-offset} ${-offset} ${(scale + offset) * 2} ${(scale + offset) * 2}`}
      style={{ left: y, top: x }}
      {...props}
    >
      <g transform={`translate(${scale},${scale})`}>
        <Polygon
          className={fill}
          sides={6}
          transform={`scale(${scale * (1 + border)}) rotate(30)`}
        />
        <text
          className="uppercase text-center text-black font-black pointer-events-none"
          dy={scale * 0.25}
          style={{ textAnchor: 'middle', fontSize: scale * textScale }}
        >
          {letter}
        </text>
      </g>
    </svg>
  )
}

interface Position {
  x: number
  y: number
}
