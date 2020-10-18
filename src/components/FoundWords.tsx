import React from 'react'

export const FoundWords = ({ words }: { words: string[] }) => {
  return (
    <div className="border border-gray-300 my-5 p-5 rounded-md">
      <p>
        You have found {words.length} word{words.length === 1 ? '' : 's'}
      </p>
      {words.map((word, i) => (
        <p key={i} className="border-b border-gray-300 w-6/12">
          {word}
        </p>
      ))}
    </div>
  )
}
