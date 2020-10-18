import React from 'react'

export const Score: React.FC<{ score: number; letters: string }> = ({ score, letters }) => {
  return <div>{score}</div>
}
