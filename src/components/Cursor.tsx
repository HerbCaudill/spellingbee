import React from 'react'

export const Cursor: React.FC<{ scale: number }> = ({ scale }) => (
  <div
    className="inline-block bg-yellow-500 relative animate-blink"
    style={{ top: scale * 0.2, width: 2, height: scale * 1.2 }}
  ></div>
)
