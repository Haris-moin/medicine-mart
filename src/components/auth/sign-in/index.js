import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {BUTTTONS} from '../../../utils/constants';
import auth from '@react-native-firebase/auth';

const SignIn = ({
  navigation,
  signInAsGoogle,
  signInAsEmailPassword,
  signInAsFacebook,
}) => {
  const onSignUp = () => {
    navigation.navigate('SignUp');
  };
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const onSignInByEmailPassword = async () => {
    console.log('userEmail: ', userEmail);
    await signInAsEmailPassword(userEmail, userPassword);
  };

  return (
    <View>
      <LinearGradient
        colors={['#fff', '#f7f3fb', '#e8ddf2']}
        style={styles.linearGradient}>
        <Text style={styles.heading}>Sign In</Text>

        <View style={styles.formContainer}>
          <Text style={styles.labels}>Email</Text>
          <TextInput
            onChangeText={text => setUserEmail(text)}
            placeholder="Please enter your email"
            style={styles.input}
            value={userEmail}
          />
          <Text style={styles.labels}>Password</Text>
          <TextInput
            onChangeText={text => setUserPassword(text)}
            secureTextEntry={true}
            placeholder="Please enter your password"
            style={styles.input}
            value={userPassword}
          />

          <View style={styles.signInContainer}>
            <Pressable style={styles.button}>
              <Text style={styles.text} onPress={onSignInByEmailPassword}>
                {BUTTTONS.SIGNIN}
              </Text>
            </Pressable>
          </View>

          <View style={styles.otherButtons}>
            <Pressable style={styles.btn} onPress={signInAsFacebook}>
              <AntDesign style={styles.facebookIcon} name="facebook-square" />
              <Text style={styles.textOtherBtn}>{BUTTTONS.FACEBOOK}</Text>
            </Pressable>

            <Pressable style={styles.btn} onPress={signInAsGoogle}>
              <AntDesign style={styles.googleIcon} name="google" />
              <Text style={styles.textOtherBtn}>{BUTTTONS.GOOGLE}</Text>
            </Pressable>
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Don't you have an account?</Text>
            <Text style={styles.singUp} onPress={onSignUp}>
              {BUTTTONS.SIGNUP}
            </Text>
          </View>
        </View>
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

  singUp: {
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 10,
    color: '#3e9cff',
  },
  heading: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    color: '#a86ad9',
  },
  formContainer: {
    paddingHorizontal: 30,
    top: 10,
  },
  labels: {
    color: 'gray',
    marginTop: 20,
    fontSize: 14,
    marginBottom: 5,
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  signInContainer: {
    marginTop: 30,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#9982ac',
  },
  btn: {
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#65ab99',
    backgroundColor: 'transparent',
    width: '45%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  otherButtons: {
    marginTop: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: '#fff',
  },
  textOtherBtn: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: '#65ab99',
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    padding: 30,
  },
  footerText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#9982ac',
  },
  googleIcon: {fontSize: 25, color: '#e45959'},
  facebookIcon: {fontSize: 25, color: '#3b5998'},
});
export default SignIn;
