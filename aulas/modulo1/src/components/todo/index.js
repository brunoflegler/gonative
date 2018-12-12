import React, { Component } from "react";
import { View, Text } from "react-native";

import PropTypes from "prop-types";

class Todo extends Component {
  static defaultProps = {
    title: "Title Default"
  };

  static propTypes = {
    title: PropTypes.string.isRequired
  };

  render() {
    return (
      <View>
        <Text>{this.props.title}</Text>
      </View>
    );
  }
}

export default Todo;
