import { Contact } from '../../types/Contact'
import Button from '../../Atoms/Button'
import styles from './contactCard.module.scss'
import Text from '../../Atoms/Text'
import Flex from '../../Atoms/Flex'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faTrash } from '@fortawesome/free-solid-svg-icons'

interface Props {
  contact: Contact
}

const ContactCard: React.FC<Props> = ({ contact }) => {
  return (
    <div className={styles.wrapper}>
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

      <Button variant="danger" isIconOnly icon={faTrash}></Button>
    </div>
  )
}

export default ContactCard
