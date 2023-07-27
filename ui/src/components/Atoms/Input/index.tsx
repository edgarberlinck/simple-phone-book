import { IconDefinition, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './input.module.scss'
import { useRef } from 'react'

interface Props {
  icon?: IconDefinition
  placeholder?: string
  onChange: React.ChangeEvent<HTMLInputElement>
}

const Input: React.FC<Props> = ({ icon, placeholder, onChange }) => {
  const inputRef = useRef<HTMLInputElement>()

  function inputFocusControl() {
    inputRef.current?.focus()
  }

  return (
    <div
      data-testid="input-wrapper"
      className={styles.wrapper}
      onClick={inputFocusControl}
    >
      {icon && (
        <FontAwesomeIcon
          data-testid="input-icon"
          icon={faSearch}
          color="#c0c0c0"
          onClick={inputFocusControl}
        />
      )}
      <input
        data-testid="input"
        ref={inputRef}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  )
}

export default Input
