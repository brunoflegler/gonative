import React from 'react';
import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
  createStackNavigator,
  createMaterialTopTabNavigator,
} from 'react-navigation';

import Icon from 'react-native-vector-icons/FontAwesome';
import Tshirt from './pages/products/components/tshirts';
import Shirt from './pages/products/components/shirts';
import Hat from './pages/products/components/hats';
import Blouses from './pages/products/components/blouses';
import Pants from './pages/products/components/pants';
import Details from './pages/details';
import Cart from './pages/carts';
import IconCartBadge from './components/IconCartBadge';

import { colors } from './styles';

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      User: createBottomTabNavigator(
        {
          Home: {
            screen: createStackNavigator(
              {
                Main: {
                  screen: createMaterialTopTabNavigator(
                    {
                      Tshirt: {
                        navigationOptions: {
                          tabBarLabel: 'Camisetas',
                        },
                        screen: Tshirt,
                      },
                      Shirt: {
                        navigationOptions: {
                          tabBarLabel: 'Camisetas',
                        },
                        screen: Shirt,
                      },
                      Hat: {
                        navigationOptions: {
                          tabBarLabel: 'Bonés',
                        },
                        screen: Hat,
                      },
                      Blouses: {
                        navigationOptions: {
                          tabBarLabel: 'Blusas',
                        },
                        screen: Blouses,
                      },
                      Pants: {
                        navigationOptions: {
                          tabBarLabel: 'Calças',
                        },
                        screen: Pants,
                      },
                    },
                    {
                      tabBarOptions: {
                        scrollEnabled: true,
                        labelStyle: {
                          fontSize: 12,
                        },
                        tabStyle: {
                          width: 100,
                        },
                        style: {
                          backgroundColor: colors.primary,
                        },
                        indicatorStyle: {
                          height: 5,
                          backgroundColor: colors.white,
                        },
                      },
                    },
                  ),
                  navigationOptions: {
                    headerTitle: 'GoCommerce',
                    lazy: true,
                  },
                },
                Details,
              },
              {
                headerLayoutPreset: 'center',
                defaultNavigationOptions: {
                  headerStyle: {
                    backgroundColor: colors.white,
                  },
                  headerTintColor: colors.primary,
                },
              },
            ),
            navigationOptions: {
              tabBarIcon: ({ tintColor }) => <Icon name="home" size={24} color={tintColor} />,
            },
          },
          Cart: {
            screen: createStackNavigator(
              {
                Cart,
              },
              {
                headerLayoutPreset: 'center',
                defaultNavigationOptions: {
                  headerStyle: {
                    backgroundColor: colors.white,
                  },
                  headerTintColor: colors.primary,
                },
              },
            ),
            navigationOptions: {
              tabBarIcon: ({ tintColor }) => <IconCartBadge tintColor={tintColor} />,
            },
          },
        },
        {
          initialRouteName: 'Home',
          backBehavior: 'initialRoute',
          tabBarOptions: {
            showIcon: true,
            showLabel: false,
            activeTintColor: colors.primary,
            inactiveTintColor: colors.light,
            style: {
              backgroundColor: colors.white,
            },
          },
        },
      ),
    },
    {
      initialRouteName: 'User',
      backBehavior: 'initialRoute',
    },
  ),
);

export default Routes;
