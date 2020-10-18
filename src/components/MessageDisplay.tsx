import React from 'react'
import { MessageType } from '../types'

type MessageDisplayProps = {
  message?: string
  messageType?: MessageType
}

const getColor = (messageType?: MessageType) => {
  switch (messageType) {
    case MessageType.REJECT:
      return 'bg-black border-black'
    case MessageType.ACCEPT:
      return 'bg-white border-black'
    case MessageType.PANGRAM:
      return 'bg-yellow-500 border-yellow-600'
    default:
      return ''
  }
}
export const MessageDisplay: React.FC<MessageDisplayProps> = ({ message, messageType }) => {
  return (
    <div className={`h-5 text-sm text-center ${getColor(messageType)}`}>
      {message === undefined ? '' : message}
    </div>
  )
}
