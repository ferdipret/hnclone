import React from 'react'
import { shallow } from 'enzyme'
import ShowMoreBtn from './ShowMoreBtn'

describe('ShowMoreBtn', () => {
  const showMoreBtn = shallow(<ShowMoreBtn />)

  it('renders properly', () => {
    expect(showMoreBtn).toMatchSnapshot()
  })
})
