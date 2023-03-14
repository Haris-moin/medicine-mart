import React from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity} from 'react-native';
import {Text, Card} from '@rneui/themed';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';
const Checkout = ({product}) => {
  const {
    cartReducer: {total},
  } = useSelector(state => state);
  return (
    <LinearGradient
      colors={['#f7f3fb', '#e8ddf2']}
      style={styles.linearGradient}>
      <View style={styles.Section}>
        <View>
          <Text style={styles.title}>Dilevery Address</Text>
        </View>
        <View style={styles.formContainer}>
          <TextInput placeholder="street address" style={styles.input} />
          <TextInput placeholder="phone" style={styles.input} />
        </View>
        <View style={styles.formContainer}>
          <TextInput placeholder="city" style={styles.input} />
          <TextInput placeholder="country" style={styles.input} />
        </View>
      </View>
      <Card.Divider style={styles.divider} />
      <View style={styles.Section}>
        <View>
          <Text style={styles.title}>Payment Method</Text>
          <Text style={styles.payMethod}>Cash on delivery</Text>
        </View>
      </View>
      <Card.Divider style={styles.divider} />
      <View style={styles.Section}>
        <View style={styles.totalAmount}>
          <Text style={styles.total}>Total</Text>
          <Text style={styles.total}>Rs.{total}</Text>
        </View>
      </View>
      <Card.Divider style={styles.divider} />
      <TouchableOpacity style={styles.buyNowBtn}>
        <Text style={styles.buyNowBtnText}>Proceed to Checkout</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  linearGradient: {
    width: '100%',
    height: '100%',
  },
  divider: {
    width: '90%',
    margin: '5%',
  },
  formContainer: {
    paddingHorizontal: 30,
    top: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  payMethod: {
    color: 'gray',
    marginTop: 10,
    fontSize: 20,
    marginBottom: 5,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#f7f3fb',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#e8ddf2',
    margin: 10,
    paddingHorizontal: 10,
  },
  buyNowBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: '#c5a8e0',
    height: 55,
    width: '80%',
    marginLeft: '10%',
    marginTop: 40,
  },
  title: {
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  card: {
    width: '90%',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 5,
  },
  Section: {
    display: 'flex',
    flexDirection: 'column',
    padding: 20,
  },

  totalAmount: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 10,
  },
  total: {
    color: 'black',
    fontSize: 17,
    fontWeight: '250',
  },
  buyNowBtnText: {
    fontSize: 16,
    color: 'white',
  },
});
export default Checkout;
