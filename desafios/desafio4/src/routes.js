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
import Hat from './pages/products/components/hats';
import Details from './pages/details';
import Cart from './pages/carts';

import { colors } from './styles';

const Routes = createAppContainer(
  createSwitchNavigator({
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
                    Hat: {
                      navigationOptions: {
                        tabBarLabel: 'Bonés',
                      },
                      screen: Hat,
                    },
                  },
                  {
                    tabBarOptions: {
                      scrollEnabled: false,
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
            tabBarIcon: ({ tintColor }) => (
              <Icon name="shopping-cart" size={24} color={tintColor} />
            ),
          },
        },
      },
      {
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
  }),
);

export default Routes;
