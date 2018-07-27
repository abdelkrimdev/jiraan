import { createStackNavigator, createSwitchNavigator } from 'react-navigation'

import { navigationConstants } from '../constants/navigation.constants'

import SplashScreen from '../screens/splash.screen'
import LoginScreen from '../screens/login.screen'
import Home from '../screens/Home'

const authenticationStack = createStackNavigator(
  { [navigationConstants.LOGIN]: LoginScreen },
  { initialRouteName: navigationConstants.LOGIN }
)

const applicationStack = createStackNavigator(
  { Home: Home },
  { initialRouteName: 'Home' }
)

const routes = createSwitchNavigator(
  {
    [navigationConstants.SPLASH]: SplashScreen,
    [navigationConstants.AUTH]: authenticationStack,
    [navigationConstants.APP]: applicationStack
  },
  { initialRouteName: navigationConstants.SPLASH }
)

export default routes
