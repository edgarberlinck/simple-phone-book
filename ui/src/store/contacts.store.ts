import { create } from 'zustand'
import { Contact } from '../types/Contact'
import client from '../lib/client'

interface ContactStore {
  contacts?: Contact[]
  get: (id: number) => Promise<Contact>
  fetch: (query: string) => void
  save: () => Promise<void>
  remove: () => Promise<void>
}

const useContactsStore = create<ContactStore>((set, get) => ({
  contacts: [],
  fetch: async (query: string) => {
    const response = await client.get<Contact>('/contacts', {
      params: {
        lastname: query,
      },
    })

    set({ contacts: response.data })
  },

  get: async (id: number) => {
    const response = await client(`/contacts/${id}`)
    return response.data
  },

  save: async (contact: Contact) => {
    if (contact.id) {
      const { firstname, lastname, phonenumber } = contact
      await client.post(`/contacts/${contact.id}`, {
        firstname,
        lastname,
        phonenumber,
      })
    } else {
      await client.put('/contacts', contact)
    }
  },
  remove: async (id: number) => {
    await client.delete(`/contacts/${id}`)
    await get().fetch()
  },
}))

export default useContactsStore
