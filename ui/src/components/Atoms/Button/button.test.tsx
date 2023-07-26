import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Button from '.'
import { expect, beforeEach, it, vi } from 'vitest'

describe('Button', () => {
  const buttonText = 'My Button'
  const onClickEvent = vi.fn()

  beforeEach(() => {
    render(<Button onClick={onClickEvent}>{buttonText}</Button>)
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should render the button', async () => {
    expect(screen.getByText(buttonText)).toBeInTheDocument()
  })

  it('should call `onClick` event when the button is clicket', async () => {
    await userEvent.click(screen.getByText(buttonText))
    expect(onClickEvent.mock.calls).not.toHaveLength(0)
  })
})
