import React, {useEffect} from 'react';

import {View} from 'react-native';
import LoginScreen from './src/screens/login';
import ProfileScreen from './src/screens/profileScreen';
import SignupScreen from './src/screens/signUp';
import {openDatabase} from 'react-native-sqlite-storage';
import BottomStack from './src/screens/bottomTab';

// this is our database name
var db = openDatabase({name: 'UserDatabase.db'});

const App = () => {
  useEffect(() => {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='User'",
        [],
        function (tx, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS User', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS User(UserID INTEGER PRIMARY KEY AUTOINCREMENT, Email VARCHAR(100), Password VARCHAR(100),isEmailConfirmed INTEGER(100),isUserLoggedIn INTEGER(100))',
              [],
            );
          }
        },
      );
    });
  });
  return (
    <View style={{flex: 1}}>
      {/* <SignupScreen /> */}
      {/* <LoginScreen /> */}
      {/* <ProfileScreen /> */}
      <BottomStack />
      {/* <AppointmentScreen /> */}
      {/* <AddAppointment /> */}
    </View>
  );
};

export default App;
