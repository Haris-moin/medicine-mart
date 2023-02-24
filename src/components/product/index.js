import React from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';

import {Text, Card} from '@rneui/themed';

const Product = ({navigation, title, price, id, image}) => {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('Details', {productId: id})}>
      {/* <View style={styles.card}> */}
      <Card>
        <Image style={styles.image} source={image} />
        <Card.Divider />
        <Text style={styles.textTitle}>{title}</Text>
        <Text style={styles.textPrice}>Rs: {price}</Text>
      </Card>
      {/* </View> */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '50%',
    overflow: 'hidden',
    marginBottom: 20,
    height: 250,
  },
  addToCart: {
    backgroundColor: '#d4c3f7',
    borderRadius: 0,
  },
  image: {
    height: 100,
    width: '90%',
    margin: 10,
  },
  textTitle: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  textPrice: {
    textAlign: 'center',
    margin: 10,
  },
});

export default Product;
