import React from 'react'
import { List, ListItem } from 'semantic-ui-react'
import { User } from "@daml.js/create-daml-app"
import { useStreamQueries } from "@daml/react"

// Component for displaying list of messages for current user

const MessageList: React.FC = () => {
  const messagesResult = useStreamQueries(User.Message)

  return (
    <List relaxed>
      {messagesResult.contracts.map(message => {
        const {sender, receiver, content} = message.payload
        return (
          <ListItem
            className='test-select-message-item'
            key={message.contractId}>
              <strong>{sender} &arr; {receiver}:</strong> {content}
          </ListItem>
        )
      })}
    </List>
  )
}

export default MessageList