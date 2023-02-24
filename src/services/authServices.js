import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

export const createUserByEmailPassword = (email, password) => {
  try {
    auth().createUserWithEmailAndPassword(email, password);
  } catch (error) {
    alert(error);
  }
};

export const signinByEmailPassword = (email, password) => {
  try {
    auth().signInWithEmailAndPassword(email, password);
  } catch (error) {
    alert(error);
  }
};

// export const logout = async () => {
//   await GoogleSignin.hasPlayServices();
//   await GoogleSignin.signOut();
//   userLoggedOut();
//   // console.log('signOut: ', signOut);
// };

export const isSignedInAsGoogle = async () => {
  const isLogedIn = await GoogleSignin.isSignedIn();
  // console.log('isSignedIn: ', isLogedIn);
  // this.setState({isLoginScreenPresented: !isSignedIn});
};

export const signInAsGoogle = async () => {
  // console.log('signIn: ');
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    if (userInfo) {
      console.log('userInfo: asdasd', userInfo);
      userLoggedIn(userInfo.user.id);
    }
    // this.setState({userInfo});
  } catch (error) {
    console.log('error: ', error);
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (e.g. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      console.log('statusCodes.PLAY_SERVICES_NOT_AVAILABLE: ');
      // play services not available or outdated
    } else {
      // some other error happened
    }
  }
};
