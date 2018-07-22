import { createStackNavigator } from 'react-navigation';

import SignIn from '../screens/SignIn';

const routes = createStackNavigator(
    { Home: SignIn },
    { initialRouteName: 'Home' }
);

export default routes;
