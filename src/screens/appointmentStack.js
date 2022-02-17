import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppointmentScreen from './appointment';
import AddAppointment from './appointment';

const Stack = createNativeStackNavigator();

const AppointmentStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Appointment" component={AppointmentScreen} />
      <Stack.Screen name="New Appointment" component={AddAppointment} />
    </Stack.Navigator>
  );
};

export default AppointmentStack;
