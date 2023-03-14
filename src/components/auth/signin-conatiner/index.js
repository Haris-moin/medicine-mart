import React, {useEffect, useState} from 'react';

import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {
  LoginManager,
  GraphRequest,
  GraphRequestManager,
  AccessToken,
} from 'react-native-fbsdk';
import Lottie from 'lottie-react-native';
import {useDispatch} from 'react-redux';
import SignIn from '../sign-in';

const SignInContainer = ({navigation}) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const userLoggedIn = id => {
    dispatch({type: 'IS_USER_SIGN_IN', id: id});
  };

  useEffect(() => {
    GoogleSignin.configure();
  }, []);

  const signInAsFacebook = async () => {
    try {
      setIsLoading(true);
      const result = await LoginManager.logInWithPermissions([
        'public_profile',
        'email',
      ]);

      if (result.isCancelled) {
        throw 'User cancelled the login process';
      }
      const data = await AccessToken.getCurrentAccessToken();
      console.log('Got the Access Token: ');
      if (!data) {
        throw 'Something went wrong obtaining access token';
      }
      const facebookCredential = auth.FacebookAuthProvider.credential(
        data.accessToken,
      );

      const res = auth().signInWithCredential(facebookCredential);
      userLoggedIn(data.userID);
      return res;
    } catch (error) {
      console.log('error: ', error);
    }
    setIsLoading(false);
  };

  const signInAsEmailPassword = async (email, password) => {
    try {
      setIsLoading(true);
      const {user} = await auth().signInWithEmailAndPassword(email, password);
      userLoggedIn(user.uid);
    } catch (error) {
      console.log('error: ', error);
    }
    setIsLoading(false);
  };

  const signInAsGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      setIsLoading(true);
      const userInfo = await GoogleSignin.signIn();
      if (userInfo) {
        console.log('userInfo: asdasd', userInfo);
        userLoggedIn(userInfo.user.id);
      }
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log(
          'statusCodes.SIGN_IN_CANCELLED: ',
          statusCodes.SIGN_IN_CANCELLED,
        );
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('statusCodes.IN_PROGRESS: ', statusCodes.IN_PROGRESS);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('statusCodes.PLAY_SERVICES_NOT_AVAILABLE: ');
      } else {
        console.log('error: ', error);
      }
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
    <SignIn
      navigation={navigation}
      signInAsGoogle={signInAsGoogle}
      signInAsEmailPassword={signInAsEmailPassword}
      signInAsFacebook={signInAsFacebook}
    />
  );
};

export default SignInContainer;
