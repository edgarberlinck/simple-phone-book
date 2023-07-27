import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Button from '.'
import { expect, beforeEach, it, vi } from 'vitest'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

describe('Button', () => {
  const buttonText = 'My Button'
  const onClickEvent = vi.fn()

  beforeEach(() => {
    render(<Button onClick={onClickEvent}>{buttonText}</Button>)
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should render the button', () => {
    expect(screen.getByText(buttonText)).toBeInTheDocument()
  })

  it('it should render the text', () => {
    expect(screen.getByText(buttonText)).toBeInTheDocument()
  })

  it('should call `onClick` event when the button is clicked', async () => {
    await userEvent.click(screen.getByText(buttonText))
    expect(onClickEvent.mock.calls).not.toHaveLength(0)
  })

  describe('Icon Button', () => {
    it('if `isIconOnly` should render the button without text', () => {
      const iconOnlyText = 'you should not see me'
      render(
        <Button icon={faSearch} isIconOnly onClick={onClickEvent}>
          {iconOnlyText}
        </Button>
      )

      expect(screen.findByTestId(iconOnlyText)).rejects
      expect(screen.getByTestId('button-icon')).toBeInTheDocument()
    })
  })
})
