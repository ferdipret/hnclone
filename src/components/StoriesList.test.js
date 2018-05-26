import React from 'react'
import { shallow } from 'enzyme'
import StoriesList from './StoriesList'

describe('StoriesList', () => {
  const storiesList = shallow(<StoriesList />)
  it('renders properly', () => {
    expect(storiesList).toMatchSnapshot()
  })
})
