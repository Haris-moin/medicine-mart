import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {productsData} from '../../data/productsMock';
import LoadingFooter from '../../common/loading-footer';
import Product from '../product';
import LinearGradient from 'react-native-linear-gradient';

const Products = ({navigation}) => {
  const [list, setList] = useState(productsData.slice(0, 14));
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(!loading);
  }, [list]);
  const _onEndReached = () => {
    if (list.length < productsData.length) {
      setLoading(true);
      setTimeout(() => {
        setList([...productsData]);
      }, 2000);
    } else setLoading(false);
  };
  const renderFooterLoading = () => <LoadingFooter loading={loading} />;
  return (
    <View style={styles.items}>
      <LinearGradient
        colors={['#fff', '#f7f3fb', '#e8ddf2']}
        style={styles.linearGradient}>
        <FlatList
          style={styles.items}
          data={list}
          renderItem={({item}) => (
            <Product
              navigation={navigation}
              title={item.name}
              price={item.balance}
              image={item.picture}
              id={item.id}
            />
          )}
          keyExtractor={item => item.id}
          onEndReached={_onEndReached}
          ListFooterComponent={renderFooterLoading}
          numColumns={2}
          columnWrapperStyle={{justifyContent: 'space-around'}}
        />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    paddingTop: 20,
    width: '100%',
    height: '100%',
  },
  items: {
    // height: '88%',
    // marginBottom: 20,
  },
});
export default Products;
