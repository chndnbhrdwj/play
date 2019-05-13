import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Card, Options, Option } from './components/common';

export default class App extends Component {
  state = {
    tableFor: 0
  };

  random() {
    const max = 10;
    const min = 2;
    return Math.floor(Math.random() * (+max - +min) + +min);
  }

  renderOptions(number) {
    return (
      <Option
        style={styles.welcome}
        optionText={(this.state.tableFor + this.random()) * number}
      />
    );
  }

  renderInput() {
    if (!this.state.tableFor) {
      return (
        <TextInput
          style={styles.welcome}
          placeholder='Quiz for the table of ?'
          onChangeText={text => this.setState({ tableFor: Number(text) })}
        />
      );
    } else {
      let number = this.random();
      return (
        <View>
          <Card>
            <Text style={styles.welcome}>
              {this.state.tableFor} x {number} = ?
            </Text>
          </Card>
          <Options style={styles.welcome}>
            <Option optionText={this.state.tableFor * number} />
            {this.renderOptions(number)}
            {this.renderOptions(number)}
            {this.renderOptions(number)}
          </Options>
        </View>
      );
    }
  }

  render() {
    return <View style={styles.container}>{this.renderInput()}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10
  }
});
