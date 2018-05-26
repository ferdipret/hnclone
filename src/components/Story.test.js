import React from 'react'
import { shallow } from 'enzyme'
import Story from './Story'

describe('Story', () => {
  const story = shallow(<Story />)
  it('renders properly', () => {
    expect(story).toMatchSnapshot()
  })
})
