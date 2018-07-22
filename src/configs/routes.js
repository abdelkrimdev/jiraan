import { createStackNavigator, createSwitchNavigator } from 'react-navigation';

import CheckIdentityScreen from '../screens/check-identity.screen';
import SignIn from '../screens/SignIn';
import Home from '../screens/Home';

const authStack = createStackNavigator(
    { SignIn: SignIn },
    { initialRouteName: 'SignIn' }
);

const appStack = createStackNavigator(
    { Home: Home },
    { initialRouteName: 'Home' }
);

const routes = createSwitchNavigator(
    {
        Check: CheckIdentityScreen,
        Auth: authStack,
        App: appStack
    },
    { initialRouteName: 'Check' }
);

export default routes;
