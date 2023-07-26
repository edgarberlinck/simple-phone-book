import styles from './button.module.scss'

interface Props {
  children: React.ReactNode
  onClick: React.MouseEvent<HTMLButtonElement>
}

const Button: React.FC<Props> = ({ children, onClick }) => {
  return (
    <button className={styles.primary} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
