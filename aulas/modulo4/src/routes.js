import React from "react";
import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";

import Icon from "react-native-vector-icons/FontAwesome";
import Product from "./pages/products";
import Details from "./pages/details";
import Cart from "./pages/carts";

const Routes = createAppContainer(
  createSwitchNavigator({
    User: createBottomTabNavigator(
      {
        Home: {
          screen: createStackNavigator(
            {
              Product,
              Details
            },
            {
              headerLayoutPreset: "center"
            }
          ),
          navigationOptions: {
            tabBarIcon: ({ tintColor }) => {
              return <Icon name="home" size={24} color={tintColor} />;
            }
          }
        },
        Cart: {
          screen: createStackNavigator(
            {
              Cart
            },
            {
              headerLayoutPreset: "center"
            }
          ),
          navigationOptions: {
            tabBarIcon: ({ tintColor }) => {
              return <Icon name="shopping-cart" size={24} color={tintColor} />;
            }
          }
        }
      },
      {
        tabBarOptions: {
          showIcon: true,
          showLabel: false,
          activeTintColor: "tomato",
          inactiveTintColor: "rgba(255, 255, 255, 0.3)",
          style: {
            backgroundColor: "#444A5A"
          }
        }
      }
    )
  })
);

export default Routes;
