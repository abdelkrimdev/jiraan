import React from 'react'
import { shallow } from 'enzyme'

import { CreateAccount } from './create-account.screen'

describe('create account screen', () => {
  it('should render without crashing.', () => {
    const wrapper = shallow(
      <CreateAccount />
    )

    expect(wrapper).toBeDefined()
  })
})
