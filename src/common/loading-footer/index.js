import React from 'react';
import {View, ActivityIndicator} from 'react-native';

const LoadingFooter = ({loading}) => {
  if (loading) {
    return (
      <View>
        <ActivityIndicator size={'large'} />
      </View>
    );
  } else {
    return null;
  }
};

export default LoadingFooter;
