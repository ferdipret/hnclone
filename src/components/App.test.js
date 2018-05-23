import React from 'react'
import { shallow } from 'jest'
import App from './app'

describe('App', () => {
  const app = shallow(<App />)

  it('renders properly', () => {
    expect(app).toMatchSnapshot()
  })
})
