import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

import ConnectedHome, { Home } from './home.screen'
import { navigationConstants } from '../constants/navigation.constants'

const mockStore = configureStore([ thunkMiddleware ])
const navigation = { navigate: jest.fn() }

describe('home screen', () => {
  it('should render without crashing.', () => {
    const wrapper = shallow(<Home authenticatedUser={{email: ''}} />)

    expect(wrapper).toBeDefined()
  })

  it('should render correctly.', () => {
    const wrapper = shallow(<Home authenticatedUser={{email: ''}} />)

    expect(wrapper).toMatchSnapshot()
  })

  it('should connect to the store without crashing.', () => {
    const store = mockStore({
      currentUser: { user: { } }
    })

    const container = shallow(<ConnectedHome store={store} />).dive()

    expect(container).toBeDefined()
  })

  it('should logout the user.', () => {
    const store = mockStore({
      currentUser: { user: { } }
    })

    const container = shallow(<ConnectedHome navigation={navigation} store={store} />).dive()
    container.find('Button').simulate('press')

    expect(store.getActions()).toMatchSnapshot()
    expect(navigation.navigate).toBeCalled()
    expect(navigation.navigate).toBeCalledWith(navigationConstants.AUTH)
  })
})
