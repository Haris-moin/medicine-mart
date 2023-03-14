import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProductDetails from '../components/product-details';
import Products from '../components/products';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Cart from '../components/cart';
import {StyleSheet} from 'react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useDispatch, useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import SignInContainer from '../components/auth/signin-conatiner';
import auth from '@react-native-firebase/auth';
import SignUpContainer from '../components/auth/signup-container';
import Lottie from 'lottie-react-native';
import Checkout from '../components/check-out';

const Stack = createStackNavigator();

const StackNavigations = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const isSignedInAsGoogle = async () => {
    const isLogedIn = await GoogleSignin.isSignedIn();
    console.log('isLogedIn: ', isLogedIn);
    return isLogedIn;
  };
  const userLoggedOut = async () => {
    dispatch({type: 'IS_USER_SIGN_IN', id: false});
  };
  const logout = async () => {
    setIsLoading(true);
    if (await isSignedInAsGoogle()) {
      await GoogleSignin.hasPlayServices();
      await GoogleSignin.signOut();
    } else {
      await auth().signOut();
    }
    userLoggedOut();
    setIsLoading(false);
  };

  const {
    authReducer: {isUserLoggedIn},
  } = useSelector(state => state);

  const AuthenticatedNavigation = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: '#d4c3f7'},
          headerTitleAlign: 'center',
          headerTintColor: '#8c6fa8',
        }}>
        <Stack.Screen
          name="Home"
          component={Products}
          options={{
            headerRight: () => (
              <AntDesign style={styles.icon} name="logout" onPress={logout} />
            ),
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen name="Details" component={ProductDetails} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Checkout" component={Checkout} />
      </Stack.Navigator>
    );
  };

  const AuthScreens = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="SinIn" component={SignInContainer} />
        <Stack.Screen name="SignUp" component={SignUpContainer} />
      </Stack.Navigator>
    );
  };
  if (isLoading) {
    return (
      <Lottie source={require('../assets/97930-loading.json')} autoPlay loop />
    );
  }
  return (
    <NavigationContainer>
      {isUserLoggedIn ? <AuthenticatedNavigation /> : <AuthScreens />}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  icon: {
    fontSize: 25,
    color: '#8c6fa8',
    fontWeight: '700',
    marginRight: 20,
    marginLeft: 20,
  },
});
export default StackNavigations;
