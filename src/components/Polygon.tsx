import React from 'react'

const TAU = Math.PI * 2

export const Polygon: React.FunctionComponent<
  React.SVGAttributes<SVGPolygonElement> & { sides: number }
> = ({ sides, ...props }) => {
  const angle = TAU / sides
  const points = range(sides)
    .map(i => angle * i)
    .map(a => [Math.sin(a), Math.cos(a)].join())
    .join(' ')

  return <polygon points={points} {...props} />
}

const range = (n: number) => Array.from(Array(n).keys())
