import React from 'react'
import { ChatEngine } from 'react-chat-engine'
import ChatFeed from './components/ChatFeed'
import './App.css'

const App = () => {
  return (
    <>
      <ChatEngine
        height="100vh"
        projectID="bacb6ba9-b623-4136-a19e-573206e69c49        "
        userName="ayoub"
        userSecret="lina2015"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />
    </>
  )
}

export default App
