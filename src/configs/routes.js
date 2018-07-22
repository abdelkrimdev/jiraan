import { createStackNavigator, createSwitchNavigator } from 'react-navigation';

import CheckIdentityScreen from '../screens/check-identity.screen';
import SignIn from '../screens/SignIn';
import Home from '../screens/Home';

const authenticationStack = createStackNavigator(
    { SignIn: SignIn },
    { initialRouteName: 'SignIn' }
);

const applicationStack = createStackNavigator(
    { Home: Home },
    { initialRouteName: 'Home' }
);

const routes = createSwitchNavigator(
    {
        Check: CheckIdentityScreen,
        Auth: authenticationStack,
        App: applicationStack
    },
    { initialRouteName: 'Check' }
);

export default routes;
