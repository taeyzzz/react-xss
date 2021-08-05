import React from 'react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

import "./style.scss"

dayjs.extend(relativeTime)

const ChatArea = ({ messages }) => {
  return (
    <div className="chat-area-container">
      {messages.map(m => {
        return (
          <div key={m.id} className="message-box-container">
            <div className="message-container">
              <div className="message" dangerouslySetInnerHTML={{ "__html": m.text }}></div>
            </div>
            <div className="timestamp">{dayjs(m.timestamp).fromNow()}</div>
          </div>
        )
      })}
    </div>
  )
}

export default ChatArea