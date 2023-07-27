import styles from './text.module.scss'

interface Props {
  children: React.ReactNode
  variant: 'title' | 'subtitle' | 'text'
  isBold?: boolean
  color?: 'muted' | 'default'
  size?: 'sm' | 'md' | 'lg' | 'xlg'
}

const Text: React.FC<Props> = ({
  children,
  variant,
  isBold = false,
  color = 'default',
  size = 'md',
}) => {
  const classNames: string[] = []
  if (variant === 'text') classNames.push(styles[`text-${size}`])
  if (isBold) classNames.push(styles['text-bold'])
  if (color === 'muted') classNames.push(styles['text-muted'])

  if (variant === 'title')
    return (
      <h1 data-testid="title" className={classNames.join(' ')}>
        {children}
      </h1>
    )
  if (variant === 'subtitle')
    return (
      <h2 data-testid="subtitle" className={classNames.join(' ')}>
        {children}
      </h2>
    )
  return (
    <span data-testid="text" className={classNames.join(' ')}>
      {children}
    </span>
  )
}

export default Text
