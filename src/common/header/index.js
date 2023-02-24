import * as React from 'react';

import {View} from 'react-native';
import {Header} from '@rneui/themed';

const AppBar = () => {
  return (
    <View>
      <Header
        backgroundColor="#d4c3f7"
        leftComponent={{icon: 'menu', color: '#fff'}}
        rightComponent={{icon: 'home', color: '#fff'}}
      />
    </View>
  );
};
export default AppBar;
