import React from 'react'
import { render, screen } from '@testing-library/react'
import Render from './Render'

describe('Rendering', () => {
  it('Should render all the elements correctly', () => {
    render(<Render />)
    // screen.debug()
    // screen.debug(screen.getByRole('heading'))
    expect(screen.getByRole('heading')).toBeTruthy()
    expect(screen.getByRole('textbox')).toBeTruthy()
    const buttons = screen.getAllByRole('button')
    expect(buttons[0]).toBeTruthy()
    expect(buttons[1]).toBeTruthy()
    expect(screen.getByText('UUUUUU'))
    expect(screen.queryByText('fuck you all')).toBeNull()
    expect(screen.getByTestId('copyright')).toBeTruthy()
  })
})
