import React from 'react'
import { Cursor } from './Cursor'

export const InputDisplay: React.FC<{ input: string; scale: number }> = ({ input, scale }) => {
  return (
    <div className="text-center h-12 font-bold tracking-wider" style={{ fontSize: scale }}>
      {input}
      <Cursor scale={scale}></Cursor>
    </div>
  )
}
