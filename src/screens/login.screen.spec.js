import React from 'react'
import { shallow } from 'enzyme'

import { Login } from './login.screen'

describe('login screen', () => {
  it('should render without crashing.', () => {
    const wrapper = shallow(
      <Login />
    )

    expect(wrapper).toBeDefined()
  })
})
