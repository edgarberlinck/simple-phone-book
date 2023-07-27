import { render, screen } from '@testing-library/react'
import Input from '.'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { vi } from 'vitest'
import userEvent from '@testing-library/user-event'

describe('Input', () => {
  it('should render the input without any prop', () => {
    render(<Input />)
    expect(screen.getByTestId('input-wrapper')).toBeInTheDocument()
  })

  it('if the `icon` prop is present, we should render it', () => {
    render(<Input icon={faSearch} />)
    expect(screen.getByTestId('input-icon')).toBeInTheDocument()
  })

  it('if the `placeholder` props is present, we should render the input with the placeholder', () => {
    const placeholderText = 'My amazing placeholder'
    render(<Input placeholder={placeholderText} />)
    expect(screen.getByPlaceholderText(placeholderText)).toBeInTheDocument()
  })

  it('should execute `onChangeEvent` on change', async () => {
    const onChageMock = vi.fn()
    render(<Input onChange={onChageMock} />)
    await userEvent.type(screen.getByTestId('input'), 'a')
    expect(onChageMock.mock.calls).not.toHaveLength(0)
  })
})
