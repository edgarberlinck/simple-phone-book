import { Contact } from '../../../types/Contact'
import ContactCard from '../ContactCard'
import styles from './contactlist.module.scss'

interface Props {
  contacts: Contact[]
}

const ContactList: React.FC<Props> = ({ contacts }) => {
  return (
    <div className={styles.wrapper}>
      {contacts.map((contact: Contact) => (
        <ContactCard key={contact.id} contact={contact} />
      ))}
    </div>
  )
}

export default ContactList
