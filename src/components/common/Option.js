import React from 'react';
import { Text, View } from 'react-native';

const Option = props => {
  return (
    <View>
      <Text>{props.optionText}</Text>
    </View>
  );
};

export { Option };
