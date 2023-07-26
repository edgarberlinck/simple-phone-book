import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Title from '.'
import { expect, beforeEach, it } from 'vitest'

describe('Title', () => {
  const text = 'My Title'

  it('should render the title', async () => {
    render(<Title>{text}</Title>)
    expect(screen.getByText(text)).toBeInTheDocument()
  })

  it('should render as `h1` tag', () => {
    render(<Title variant="title">{text}</Title>)
    expect(screen.getByTestId('title')).toBeInTheDocument()
  })

  it('should render as `h2` tag', () => {
    render(<Title variant="subtitle">{text}</Title>)
    expect(screen.getByTestId('subtitle')).toBeInTheDocument()
  })

  it('should render as `span` tag', () => {
    render(<Title variant="text">{text}</Title>)
    expect(screen.getByTestId('text')).toBeInTheDocument()
  })
})
