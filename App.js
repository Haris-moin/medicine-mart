/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import StackNavigations from './src/navigations/stackNavigations';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import cartReducer from './src/store/reducers';

const store = createStore(cartReducer);
const App = () => {
  return (
    <SafeAreaView>
      <Provider store={store}>
        <LinearGradient
          colors={['#fff', '#f7f3fb', '#e8ddf2']}
          style={styles.linearGradient}>
          <StackNavigations />
        </LinearGradient>
      </Provider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    width: '100%',
    height: '100%',
  },
});
export default App;
