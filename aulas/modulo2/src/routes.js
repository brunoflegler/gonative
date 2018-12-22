import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import Welcome from '~/pages/welcome';
import Repositories from '~/pages/repositories';
import Organizations from '~/pages/organizations';
import { colors } from '~/styles';

const Routes = userLogged => createAppContainer(
  createSwitchNavigator(
    {
      Welcome,
      User: createBottomTabNavigator(
        {
          Repositories,
          Organizations,
        },
        {
          tabBarOptions: {
            showIcon: true,
            showLabel: false,
            activeTintColor: colors.white,
            inactiveTintColor: colors.whiteTranparent,
            style: {
              backgroundColor: colors.secundary,
            },
          },
        },
      ),
    },
    {
      initialRouteName: userLogged ? 'User' : 'Welcome',
    },
  ),
);

export default Routes;
