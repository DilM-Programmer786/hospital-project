import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';

import {Avatar} from 'react-native-paper';
import FormInput from '../components/formInput';
import FormButton from '../components/formButton';
import {openDatabase} from 'react-native-sqlite-storage';
// this is our database name
var db = openDatabase({name: 'UserDatabase.db'});

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [userType, setUserType] = useState();

  let loginBtn = () => {
    alert('clicked');
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM User where Email = ?',
        [email],
        (tx, results) => {
          var len = results.rows.length;
          if (len > 0) {
            let res = results.rows.item(0);
            tx.executeSql(
              'SELECT * FROM User where Password = ?',
              [password],
              (tx, results) => {
                var len1 = results.rows.length;
                if (len1 > 0) {
                  // navigate
                  alert('login success');
                } else {
                  alert('password wrong');
                }
              },
            );
          } else {
            alert('No user found with this email');
          }
        },
      );
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Avatar.Image
        source={require('../../assets/images/logo.png')}
        size={120}
      />
      <Text style={styles.text}>Medical Appointment</Text>

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
      <Picker
        selectedValue={userType}
        style={{height: 50, width: 150}}
        onValueChange={(itemValue, itemIndex) => setUserType(itemValue)}>
        <Picker.Item label="Patient" value="patient" />
        <Picker.Item label="Staff" value="staff" />
      </Picker>

      <FormButton buttonTitle="Sign In" onPress={loginBtn} />

      <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
        <Text style={styles.navButtonText}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* navigate to signup */}
      <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
        <Text style={styles.navButtonText}>
          Don't have an acount? Create here
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50,
  },
  logo: {
    height: 100,
    width: 100,
    resizeMode: 'cover',
  },
  text: {
    fontSize: 28,
    marginVertical: 15,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 25,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  },
});
