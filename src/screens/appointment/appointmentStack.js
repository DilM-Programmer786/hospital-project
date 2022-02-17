import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppointmentScreen from './appointment';
import AddAppointment from './addAppointment';
import DetailAppointment from './detailAppointment';

const Stack = createNativeStackNavigator();

const AppointmentStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Appointment" component={AppointmentScreen} />
      <Stack.Screen name="New Appointment" component={AddAppointment} />
      <Stack.Screen name="Detail Appointment" component={DetailAppointment} />
    </Stack.Navigator>
  );
};

export default AppointmentStack;
