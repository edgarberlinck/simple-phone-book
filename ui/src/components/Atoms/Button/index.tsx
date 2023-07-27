import { IconDefinition } from '@fortawesome/fontawesome-common-types'
import styles from './button.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Props {
  variant: 'primaty' | 'danger' | 'default'
  children: React.ReactNode
  onClick: React.MouseEvent<HTMLButtonElement>
  icon?: IconDefinition
  isIconOnly?: boolean
  size?: 'md' | 'lg' | 'sm'
}

const Button: React.FC<Props> = ({
  children,
  onClick,
  variant = 'default',
  icon,
  isIconOnly = false,
  size = 'md',
}) => {
  const classNames: string[] = [styles[variant], styles[size]]

  return (
    <button className={classNames.join(' ')} onClick={onClick}>
      {icon && <FontAwesomeIcon data-testid="button-icon" icon={icon} />}
      {!isIconOnly && children}
    </button>
  )
}

export default Button
