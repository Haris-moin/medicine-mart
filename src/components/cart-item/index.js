import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {useDispatch} from 'react-redux';
const CartItem = ({product}) => {
  const dispatch = useDispatch();
  const addQuantity = () => {
    dispatch({type: 'ADD_QUANTITY', id: product.id});
  };
  const subtractQuantity = () => {
    dispatch({type: 'SUB_QUANTITY', id: product.id});
  };
  return (
    <View style={styles.card}>
      <View style={styles.imgContainer}>
        <Image style={styles.tinyLogo} source={product.picture} />
      </View>
      <View style={styles.itemDescription}>
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.title}>Rs. {product.balance}</Text>
      </View>
      <View style={styles.iconsContainer}>
        <AntDesign
          onPress={subtractQuantity}
          style={[styles.minusIcon, styles.ml]}
          name="minuscircleo"
        />
        <Text style={[styles.ml]}>{product.quantity}</Text>
        <AntDesign
          onPress={addQuantity}
          style={[styles.icon, styles.ml]}
          name="pluscircleo"
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  imgContainer: {
    flex: 1,
    height: 70,
  },
  tinyLogo: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },
  minusIcon: {
    fontSize: 22,
    color: '#8c6fa8',
    fontWeight: '700',
  },
  icon: {
    fontSize: 25,
    color: '#8c6fa8',
    fontWeight: '700',
  },
  ml: {
    marginLeft: 13,
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    color: 'black',
    fontSize: 17,
    fontWeight: '350',
    marginBottom: 2,
  },
  itemDescription: {
    flex: 1,
  },
});
export default CartItem;
