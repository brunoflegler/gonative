import 'config/ReactotronConfig';
import 'config/DevToolsConfig';

import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';

import Todo from './components/todo';

export default class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Fazer cafe 1',
      },
      {
        id: 2,
        title: 'Fazer curso react native',
      },
    ],
  };

  addTodo = () => {
    const { todos } = this.state;
    this.setState({
      todos: [...todos, { id: 3, title: 'Outro Todo' }],
    });
  };

  render() {
    const { todos } = this.state;
    return (
      <View>
        {todos.map(t => (
          <Todo key={t.id} title={t.title} />
        ))}
        <Button title="add" onPress={this.addTodo}>
          <Text>Adicionar</Text>
        </Button>
      </View>
    );
  }
}
