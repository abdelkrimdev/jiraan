import { createStackNavigator, createSwitchNavigator } from 'react-navigation'

import { navigationConstants } from '../constants/navigation.constants'

import CheckIdentityScreen from '../screens/check-identity.screen'
import SignIn from '../screens/SignIn'
import Home from '../screens/Home'

const authenticationStack = createStackNavigator(
  { SignIn: SignIn },
  { initialRouteName: 'SignIn' }
)

const applicationStack = createStackNavigator(
  { Home: Home },
  { initialRouteName: 'Home' }
)

const routes = createSwitchNavigator(
  {
    [navigationConstants.CHECK]: CheckIdentityScreen,
    [navigationConstants.AUTH]: authenticationStack,
    [navigationConstants.APP]: applicationStack
  },
  { initialRouteName: navigationConstants.CHECK }
)

export default routes
