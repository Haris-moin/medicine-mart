import React, {useState} from 'react';
import {Text, StyleSheet, View, TextInput, Pressable} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {BUTTTONS} from '../../../utils/constants';

const SignUp = ({navigation, createUserByEmail}) => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const onSignIn = () => {
    navigation.navigate('SinIn');
  };

  const onSignUp = async () => {
    console.log('userPassword: ', userPassword);
    console.log('userEmail: ', userEmail);
    await createUserByEmail(userEmail, userPassword);
  };
  return (
    <View>
      <LinearGradient
        colors={['#fff', '#f7f3fb', '#e8ddf2']}
        style={styles.linearGradient}>
        <Text style={styles.heading}>Sign Up</Text>
        <View style={styles.formContainer}>
          <Text style={styles.labels}>Full Name</Text>

          <TextInput
            placeholder="Please enter your name"
            style={styles.input}
          />

          <Text style={styles.labels}>Email</Text>
          <TextInput
            placeholder="Please enter your email"
            style={styles.input}
            onChangeText={text => setUserEmail(text)}
          />
          <Text style={styles.labels}>Password</Text>
          <TextInput
            onChangeText={text => setUserPassword(text)}
            secureTextEntry={true}
            placeholder="Please enter your password"
            style={styles.input}
          />

          <Text style={styles.labels}>Confirm Password</Text>

          <TextInput
            secureTextEntry={true}
            placeholder="Please enter your password"
            style={styles.input}
          />

          <View style={styles.signUpContainer}>
            <Pressable style={styles.button} onPress={onSignUp}>
              <Text style={styles.text}>{BUTTTONS.SIGNUP}</Text>
            </Pressable>
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Already have an account?</Text>
            <Text style={styles.singIn} onPress={onSignIn}>
              {BUTTTONS.SIGNIN}
            </Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    paddingTop: 40,
    width: '100%',
    height: '100%',
  },
  singIn: {
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
    marginBottom: 5,
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  signUpContainer: {
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
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    padding: 30,
  },
  footerText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#9982ac',
  },
  googleIcon: {fontSize: 25, color: '#e45959'},
  facebookIcon: {fontSize: 25, color: '#3b5998'},
});

export default SignUp;
