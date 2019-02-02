import React from "react";

import { Text, Button, View, TouchableOpacity } from "react-native";

const Product = ({ navigation }) => (
  <View>
    <Text>Products 1</Text>
    <TouchableOpacity onPress={() => navigation.navigate("Details")}>
      <Text> Go Details</Text>
    </TouchableOpacity>
  </View>
);

Product.navigationOptions = {
  headerTitle: "Product"
};

export default Product;
