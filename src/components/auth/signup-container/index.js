import React, {useState} from 'react';
import SignUp from '../sign-up';
import auth from '@react-native-firebase/auth';
import {useDispatch} from 'react-redux';
import Lottie from 'lottie-react-native';

const SignUpContainer = ({navigation}) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const userLoggedIn = id => {
    console.log('id: ', id);
    dispatch({type: 'IS_USER_SIGN_IN', id: id});
  };

  const createUserByEmail = async (email, password) => {
    try {
      setIsLoading(true);
      const {user} = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );

      userLoggedIn(user.uid);
    } catch (error) {
      console.log('error: ', error);
    }
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <Lottie
        source={require('../../../assets/97930-loading.json')}
        autoPlay
        loop
      />
    );
  }
  return (
    <SignUp navigation={navigation} createUserByEmail={createUserByEmail} />
  );
};

export default SignUpContainer;
