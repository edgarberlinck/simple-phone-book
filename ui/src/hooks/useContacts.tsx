import { useState } from 'react'
import { Contact } from '../types/Contact'
import client from '../lib/client'

const useContacts = () => {
  const [contacts, setContacts] = useState<Contact[]>([])
  const [isFetching, setIsFetching] = useState<boolean>(false)

  const fetch = async (query: string): Contact[] => {
    setIsFetching(true)
    try {
      const response = await client
        .get<Contact>('/contacts', {
          params: {
            lastname: query,
          },
        })
        .then((res) => setContacts(res.data))
      setContacts(response.data)
    } finally {
      setIsFetching(false)
    }
  }

  return {
    fetch,
    isFetching,
    contacts,
  }
}

export default useContacts
