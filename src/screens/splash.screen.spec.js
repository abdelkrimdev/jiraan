import React from 'react'
import { shallow } from 'enzyme'

import { Splash } from './splash.screen'
import { navigationConstants } from '../constants/navigation.constants'

const navigation = { navigate: jest.fn() }

describe('splash screen', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  it('should render without crashing.', () => {
    const wrapper = shallow(<Splash />)

    expect(wrapper).toBeDefined()
  })

  it('should render correctly.', () => {
    const wrapper = shallow(<Splash />)

    expect(wrapper).toMatchSnapshot()
  })

  it('should redirect to authentication stack when the user is not logged in.', () => {
    const wrapper = shallow(<Splash navigation={navigation} />)
    wrapper.setProps({ authenticatedUser: null })

    expect(navigation.navigate).toHaveBeenCalled()
    expect(navigation.navigate).toHaveBeenCalledWith(navigationConstants.AUTH)
  })

  it('should redirect to application stack when the user is logged in.', () => {
    const wrapper = shallow(<Splash navigation={navigation} />)
    wrapper.setProps({ authenticatedUser: { } })

    expect(navigation.navigate).toHaveBeenCalled()
    expect(navigation.navigate).toHaveBeenCalledWith(navigationConstants.APP)
  })
})
