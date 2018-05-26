import React from 'react'
import { shallow } from 'enzyme'
import StoriesList from './StoriesList'

describe('StoriesList', () => {
  const props = {
    stories: [
      {
        id: 1,
        name: 'Foo',
      },
      {
        id: 2,
        name: 'Bar',
      },
      {
        id: 3,
        name: 'Baz',
      },
    ],
  }

  const storiesList = shallow(<StoriesList {...props} />)
  it('renders properly', () => {
    expect(storiesList).toMatchSnapshot()
  })
})
