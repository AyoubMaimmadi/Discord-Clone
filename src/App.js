import React from 'react'
import { ChatEngine } from 'react-chat-engine'
import ChatFeed from './components/ChatFeed'
import './App.css'

const App = () => {
  return (
    <>
      <ChatEngine
        height="100vh"
        projectID="4e4b1da0-06b7-4fa8-b9a3-31a08f615b08"
        userName="ayoub"
        userSecret="lina2015"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />
    </>
  )
}

export default App
