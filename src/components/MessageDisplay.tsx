import React from 'react'
import { makeRandom } from '../lib/makeRandom'
import { Message } from '../types'

const random = makeRandom('1')

export const MessageDisplay = ({ message }: { message: Message | undefined }) => {
  const getDisplayMessage = (message: Message): string => {
    switch (message) {
      case Message.ALREADY_FOUND:
        return 'Already found!'
      case Message.BAD_LETTERS:
        return 'Bad letters'
      case Message.GOOD:
        return 'Good!'
      case Message.EXCELLENT:
        return random.pick(['Nice!', 'Excellent!', 'Sweet!'])
      case Message.PANGRAM:
        return 'Pangram!'
      case Message.MISSING_KEY:
        return 'Missing center letter!'
      case Message.NOT_A_WORD:
        return 'Not in word list!'
      case Message.TOO_SHORT:
        return 'Too short!'
    }
    return ''
  }
  return (
    <div className="h-5 text-sm text-center">
      {message === undefined ? '' : getDisplayMessage(message)}
    </div>
  )
}
