import { createStackNavigator, createSwitchNavigator } from 'react-navigation'

import { navigationConstants } from '../constants/navigation.constants'
import { themeConstants } from '../constants/theme.constants'

import CreateAccountScreen from '../screens/create-account.screen'
import HomeScreen from '../screens/home.screen'
import LoginScreen from '../screens/login.screen'
import SplashScreen from '../screens/splash.screen'

const authenticationStack = createStackNavigator(
  {
    [navigationConstants.LOGIN]: LoginScreen,
    [navigationConstants.REGISTER]: CreateAccountScreen
  },
  {
    initialRouteName: navigationConstants.LOGIN,
    navigationOptions: {
      headerStyle: {
        backgroundColor: themeConstants.PRIMARY_COLOR
      },
      headerTintColor: themeConstants.LIGHT_COLOR,
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  }
)

const applicationStack = createStackNavigator(
  {
    [navigationConstants.HOME]: HomeScreen
  },
  { initialRouteName: navigationConstants.HOME }
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
