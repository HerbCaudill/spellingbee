import React from 'react'
import { MessageType } from '../types'

type MessageDisplayProps = {
  message?: string
  messageType?: MessageType
}

const getColor = (messageType?: MessageType) => {
  switch (messageType) {
    case MessageType.REJECT:
      return 'bg-black border border-black text-white'
    case MessageType.ACCEPT:
      return 'bg-white border border-gray-500'
    case MessageType.PANGRAM:
      return 'bg-yellow-500 border border-yellow-600'
    default:
      return 'border-transparent'
  }
}
export const MessageDisplay: React.FC<MessageDisplayProps> = ({ message, messageType }) => {
  return (
    <div className="text-center">
      <div
        className={`
          h-7 mx-auto min-w-0 py-1 px-3 inline-block
          text-sm text-center
          border rounded-md ${getColor(messageType)} 
          whitespace-no-wrap`}
      >
        {message === undefined ? <>&nbsp;</> : message}
      </div>
    </div>
  )
}
