import React from 'react'
import { Cursor } from './Cursor'

type InputDisplayProps = {
  input: string
  scale: number
  keyLetter: string
  otherLetters: string[]
}

export const InputDisplay: React.FC<InputDisplayProps> = ({
  input,
  scale,
  keyLetter,
  otherLetters,
}) => {
  const getColor = (c: string) =>
    keyLetter === c
      ? 'text-yellow-500' //
      : otherLetters.includes(c)
      ? 'text-black'
      : 'text-gray-300'
  return (
    <div className="text-center h-12 font-bold tracking-wider" style={{ fontSize: scale }}>
      {input.split('').map(c => {
        return <span className={getColor(c)}>{c}</span>
      })}
      <Cursor scale={scale}></Cursor>
    </div>
  )
}
