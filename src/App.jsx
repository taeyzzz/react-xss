import React, { useCallback, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';

import ChatArea from './components/ChatArea'
import ChatInput from './components/ChatInput';

import './app.scss'

const initialMessages = [
  { id: uuidv4(), text: "This is initial message", timestamp: dayjs().toDate() },
  { id: uuidv4(), text: "Please use Chat", timestamp: dayjs().toDate() }
]

function App() {
  const [listMessages, setListMessages] = useState(initialMessages)

  const handleSendMessage = useCallback((text) => {
    setListMessages(prev => [...prev, { id: uuidv4(), text,timestamp: dayjs().toDate() }])
  }, [setListMessages])

  return (
    <div className="app-container">
      <ChatArea messages={listMessages}/>
      <ChatInput onSend={handleSendMessage}/>
    </div>
  )
}

export default App
