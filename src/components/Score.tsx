import React from 'react'
import { getLevel } from './getLevel'
import { getMaxScore } from './getMaxScore'

export const Score: React.FC<{ score: number; letters: string }> = ({ score, letters }) => {
  const maxScore = getMaxScore(letters)
  const level = getLevel(score, maxScore)
  return (
    <div>
      <span className="inline-block w-32">{level?.name}</span>
      {score}
    </div>
  )
}
