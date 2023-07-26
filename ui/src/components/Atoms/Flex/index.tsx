import styles from './flex.module.scss'

interface Props {
  children: React.ReactNode
  justify: 'space-between' | 'space-around' | 'center' | 'start' | 'end'
}

const Flex: React.FC<Props> = ({ children, justify = 'center' }) => {
  return <div className={styles[justify]}>{children}</div>
}

export default Flex
