import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faContactBook,
  faSearch,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons'
import Button from './components/Atoms/Button'
import { useEffect, useState } from 'react'
import client from './lib/client'
import Text from './components/Atoms/Text'
import Flex from './components/Atoms/Flex'
import Input from './components/Atoms/Input'
import ContactCard from './components/Molecules/ContactCard'
import { Contact } from './types/Contact'
import ContactList from './components/Molecules/ContactList'
import { useNavigate } from 'react-router'
import useContactsStore from './store/contacts.store'

function App() {
  const fetch = useContactsStore((state) => state.fetch)
  const contacts = useContactsStore((state) => state.contacts)

  useEffect(() => {
    fetch()
  }, [])

  function handleUpdateQuery(event: React.ChangeEvent<HTMLInputElement>) {
    fetch(event.target.value)
  }

  const navigation = useNavigate()

  return (
    <>
      <Flex justify="center">
        <FontAwesomeIcon icon={faContactBook} size="3x" />
        <Text variant="title">Phone Book App</Text>
      </Flex>

      <Flex justify="space-between">
        <Text variant="subtitle">Contacts</Text>
        <Button
          variant="primary"
          size="lg"
          onClick={() => navigation('/contact')}
        >
          + Add Contact
        </Button>
      </Flex>

      <Input
        icon={faSearch}
        placeholder="Search for contact by last name..."
        onChange={handleUpdateQuery}
      />

      <ContactList contacts={contacts} />
    </>
  )
}

export default App
