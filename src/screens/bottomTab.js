import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import LoginScreen from './login';
import SignupScreen from './signUp';
import ProfileScreen from './profileScreen';

import AppointmentStack from './appointment/appointmentStack';
import PillBoxStack from './pillBox/pillBoxStack';
import MedicationStack from './medicationList/medicationStack';
const Tab = createBottomTabNavigator();
const BottomStack = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            if (route.name === 'Profile') {
              return <AntDesign name="profile" size={size} color={color} />;
            } else if (route.name === 'Pill Box') {
              return <AntDesign name="medicinebox" size={size} color={color} />;
            } else if (route.name === 'AP') {
              return <FontAwesome name="phone" size={size} color={color} />;
            } else if (route.name === 'ML') {
              return <FontAwesome name="list-alt" size={size} color={color} />;
            } else if (route.name === 'History') {
              return <FontAwesome name="history" size={size} color={color} />;
            }

            // You can return any component that you like here!
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Pill Box" component={PillBoxStack} />
        <Tab.Screen name="AP" component={AppointmentStack} />
        <Tab.Screen name="ML" component={MedicationStack} />
        <Tab.Screen name="History" component={LoginScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomStack;

const styles = StyleSheet.create({});
