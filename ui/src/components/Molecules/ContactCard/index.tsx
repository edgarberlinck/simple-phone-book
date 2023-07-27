import { Contact } from '../../types/Contact'
import Button from '../../Atoms/Button'
import styles from './contactCard.module.scss'
import Text from '../../Atoms/Text'
import Flex from '../../Atoms/Flex'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faTrash } from '@fortawesome/free-solid-svg-icons'
import useContacts from '../../../hooks/useContacts'
import { useNavigate } from 'react-router'
import useContactsStore from '../../../store/contacts.store'

interface Props {
  contact: Contact
}

const ContactCard: React.FC<Props> = ({ contact }) => {
  const remove = useContactsStore((state) => state.remove)
  const navigator = useNavigate()

  async function handleDeleteContact(
    event: React.MouseEvent<HTMLButtonElement>
  ) {
    event.stopPropagation()
    await remove(contact.id)
  }

  return (
    <div
      className={styles.wrapper}
      onClick={() => navigator(`/contact/${contact.id}`)}
    >
      <div>
        <Text
          variant="text"
          isBold
          size="xlg"
        >{`${contact.firstname} ${contact.lastname}`}</Text>
        <Flex justify="start">
          <FontAwesomeIcon icon={faPhone} color="#9b9696" />
          <Text variant="text" isBold color="muted">
            {contact.phonenumber}
          </Text>
        </Flex>
      </div>

      <Button
        variant="danger"
        isIconOnly
        icon={faTrash}
        onClick={handleDeleteContact}
      ></Button>
    </div>
  )
}

export default ContactCard
