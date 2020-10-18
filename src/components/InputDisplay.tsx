import React from 'react'

const Cursor: React.FC<{ scale: number }> = ({ scale }) => (
  <div
    className="inline-block bg-yellow-500 relative animate-blink"
    style={{ top: scale * 0.2, width: 2, height: scale * 1.2 }}
  ></div>
)

export const InputDisplay: React.FC<{ input: string; scale: number }> = ({ input, scale }) => {
  return (
    <div className="text-center h-12 font-bold tracking-wider" style={{ fontSize: scale }}>
      {input}
      <Cursor scale={scale}></Cursor>
    </div>
  )
}
