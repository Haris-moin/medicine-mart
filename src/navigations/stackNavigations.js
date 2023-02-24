import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import SignIn from '../components/auth/sign-in';
import SignUp from '../components/auth/sign-up';
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

const Stack = createStackNavigator();

const StackNavigations = () => {
  const dispatch = useDispatch();

  const isSignedInAsGoogle = async () => {
    const isLogedIn = await GoogleSignin.isSignedIn();
    return isLogedIn;
  };
  const userLoggedOutAction = async () => {
    dispatch({type: 'IS_USER_SIGN_IN', id: false});
  };
  const logout = async () => {
    if (await isSignedInAsGoogle()) {
      await GoogleSignin.hasPlayServices();
      await GoogleSignin.signOut();
    } else {
      await auth().signOut();
    }
    userLoggedOutAction();
  };

  const {isUserLoggedIn} = useSelector(state => state);

  const AuthenticatedNavigation = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: '#d4c3f7'},
          headerTitleAlign: 'center',
          headerTintColor: '#8c6fa8',
          contentStyle: {backgroundColor: '#fcdcbf'},
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
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{
            headerStyle: {
              backgroundColor: 'none',
            },
          }}
        />
      </Stack.Navigator>
    );
  };

  const AuthScreens = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="SignUp" component={SignUpContainer} />
        <Stack.Screen name="SinIn" component={SignInContainer} />
      </Stack.Navigator>
    );
  };
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
