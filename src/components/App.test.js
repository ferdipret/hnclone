import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

import store from '../store'

describe('App', () => {
  const app = shallow(<App />)

  it('renders properly', () => {
    expect(app).toMatchSnapshot()
  })

  // it('should get it`s default state from the `store` function', () => {
  //   const expectedDefaultState = {
  //     storiesIdsList: [],
  //     stories: [],
  //   }
  //
  //   expect(app.State()).toEqual(expectedDefaultState)
  // })
})
