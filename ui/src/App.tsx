import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faContactBook } from '@fortawesome/free-solid-svg-icons'
import Button from './components/Atoms/Button'
import { useEffect, useState } from 'react'
import client from './lib/client'
import Text from './components/Atoms/Text'
import Flex from './components/Atoms/Flex'

function App() {
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    client.get('/contacts').then((res) => setContacts(res.data))
  }, [])

  return (
    <>
      <Flex justify="center">
        <FontAwesomeIcon icon={faContactBook} size="3x" />
        <Text variant="title">Phone Book App</Text>
      </Flex>

      <Flex justify="space-between">
        <Text variant="subtitle">Contacts</Text>
        <Button>+ Add Contact</Button>
      </Flex>

      {contacts.map((contact) => (
        <div key={contact.id.toString()}>
          <div>{`${contact.firstname} ${contact.lastname}`}</div>
          <div>{contact.phonenumber}</div>
        </div>
      ))}
    </>
  )
}

export default App
