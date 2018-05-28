import React from 'react'
import { mount } from 'enzyme'
import ShowMoreBtn from './ShowMoreBtn'

describe('ShowMoreBtn', () => {
  const props = {
    storiesLeft: 100,
  }
  const showMoreBtn = mount(<ShowMoreBtn {...props} />)

  it('renders properly', () => {
    expect(showMoreBtn).toMatchSnapshot()
  })

  describe('if the `storiesLeft` prop is greater than 0', () => {
    it('should render the button', () => {
      expect(showMoreBtn.props().storiesLeft).toEqual(100)
      expect(showMoreBtn.find('.show-more-btn').exists()).toBe(true)
    })
  })

  describe('if the `storiesLeft` props is less than or equal to 0', () => {
    it('should not render the button', () => {
      showMoreBtn.setProps({ storiesLeft: 0 })

      expect(showMoreBtn.props().storiesLeft).toEqual(0)
      expect(showMoreBtn.find('.show-more-btn').exists()).toBe(false)
    })
  })
})
