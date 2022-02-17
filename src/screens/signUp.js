import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Platform, StyleSheet} from 'react-native';
import FormInput from '../components/formInput';
import FormButton from '../components/formButton';
import {Avatar} from 'react-native-paper';
import {openDatabase} from 'react-native-sqlite-storage';
// this is our database name
var db = openDatabase({name: 'UserDatabase.db'});

const SignupScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const signupBtn = () => {
    if (email) {
      if (password) {
        if (confirmPassword) {
          db.transaction(tx => {
            // Loop would be here in case of many values

            tx.executeSql(
              'INSERT INTO User (Email, Password) VALUES (?,?)',
              [email, password],
              (tx, results) => {
                console.log('Insert Results', results.rowsAffected);
                if (results.rowsAffected > 0) {
                  alert('sucess');
                } else {
                  alert('Updation Failed');
                }
              },
            );
          });
        } else {
          alert('Please fill Email');
        }
      } else {
        alert('Please fill password');
      }
    } else {
      alert('Please fill confirm password');
    }
  };

  return (
    <View style={styles.container}>
      <Avatar.Image
        source={require('../../assets/images/logo.png')}
        size={120}
      />
      <Text style={styles.text}>Create an account</Text>

      <FormInput
        labelValue={email}
        onChangeText={userEmail => setEmail(userEmail)}
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormInput
        labelValue={password}
        onChangeText={userPassword => setPassword(userPassword)}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
      />

      <FormInput
        labelValue={confirmPassword}
        onChangeText={userPassword => setConfirmPassword(userPassword)}
        placeholderText="Confirm Password"
        iconType="lock"
        secureTextEntry={true}
      />

      <FormButton buttonTitle="Sign Up" onPress={signupBtn} />

      <View style={styles.textPrivate}>
        <Text style={styles.color_textPrivate}>
          By registering, you confirm that you accept our{' '}
        </Text>
        <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
          <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
            Terms of service
          </Text>
        </TouchableOpacity>
        <Text style={styles.color_textPrivate}> and </Text>
        <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
          Privacy Policy
        </Text>
      </View>

      <TouchableOpacity style={styles.navButton} onPress={() => {}}>
        <Text style={styles.navButtonText}>Have an account? Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9fafd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 35,
    justifyContent: 'center',
  },
  color_textPrivate: {
    fontSize: 13,
    fontWeight: '400',
    fontFamily: 'Lato-Regular',
    color: 'grey',
  },
});

// let searchUser = () => {
//   alert('clicked');
//   db.transaction(tx => {
//     tx.executeSql(
//       'SELECT * FROM User where UserID = ?',
//       [1],
//       (tx, results) => {
//         var len = results.rows.length;
//         if (len > 0) {
//           let res = results.rows.item(0);
//           setEmail(res.Email);
//           setPassword(res.Password);
//         } else {
//           alert('No user found');
//         }
//       },
//     );
//   });
// };
