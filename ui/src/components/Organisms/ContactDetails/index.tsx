import { useNavigate, useParams } from 'react-router'
import Input from '../../Atoms/Input'
import {
  faCancel,
  faPhone,
  faSave,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import Button from '../../Atoms/Button'
import { useEffect, useState } from 'react'
import useContactsStore from '../../../store/contacts.store'
import { Contact } from '../../../types/Contact'
import styles from './contactdetails.module.scss'
import Text from '../../Atoms/Text'

const ContactDetails: React.FC = () => {
  const params = useParams()
  const get = useContactsStore((state) => state.get)

  const [firstname, setFirstName] = useState<string>()
  const [lastname, setLasttName] = useState<string>()
  const [phonenumber, setPhoneNumber] = useState<string>()

  useEffect(() => {
    if (params.id) {
      get(params.id).then((contact) => {
        setFirstName(contact.firstname)
        setLasttName(contact.lastname)
        setPhoneNumber(contact.phonenumber)
      })
    }
  }, [params, setFirstName, setLasttName, setPhoneNumber])

  const save = useContactsStore((state) => state.save)

  const navigation = useNavigate()

  function handleSave() {
    save({ firstname, lastname, phonenumber, ...params })
    navigation('/')
  }

  return (
    <div className={styles.wrapper}>
      <Text variant="subtitle">
        {params.id ? 'Updating contact' : 'Adding new contact'}
      </Text>
      <div>
        <Text variant="text" isBold>
          First Name
        </Text>
        <Input
          placeholder="First Name"
          icon={faUser}
          value={firstname}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setFirstName(event.target.value)
          }
        />
      </div>

      <div>
        <Text variant="text" isBold>
          Last Name
        </Text>
        <Input
          placeholder="Last Name"
          icon={faUser}
          value={lastname}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setLasttName(event.target.value)
          }
        />
      </div>

      <div>
        <Text variant="text" isBold>
          Phone Number
        </Text>
        <Input
          placeholder="Phone Number"
          icon={faPhone}
          value={phonenumber}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setPhoneNumber(event.target.value)
          }
        />
      </div>
      <div>
        <Button icon={faSave} variant="primary" onClick={handleSave}>
          Save
        </Button>
        <Button
          icon={faCancel}
          variant="default"
          onClick={() => navigation('/')}
        >
          Cancel
        </Button>
      </div>
    </div>
  )
}

export default ContactDetails
