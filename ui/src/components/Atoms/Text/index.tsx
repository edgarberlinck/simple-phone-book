interface Props {
  children: React.ReactNode
  variant: 'title' | 'subtitle' | 'text'
}

const Text: React.FC<Props> = ({ children, variant }) => {
  if (variant === 'title') return <h1 data-testid="title">{children}</h1>
  if (variant === 'subtitle') return <h2 data-testid="subtitle">{children}</h2>
  return <span data-testid="text">{children}</span>
}

export default Text
