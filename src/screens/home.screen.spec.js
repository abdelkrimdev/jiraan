import React from 'react'
import { shallow } from 'enzyme'

import { Home } from './home.screen'

describe('home screen', () => {
  it('should render without crashing.', () => {
    const wrapper = shallow(
      <Home />
    )

    expect(wrapper).toBeDefined()
  })
})
