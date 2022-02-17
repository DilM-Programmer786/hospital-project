import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MedicationListScreen from './medicationList';
import AddList from './add';
const ListStack = createNativeStackNavigator();

const MedicationStack = () => {
  return (
    <ListStack.Navigator>
      <ListStack.Screen
        name="Medication List"
        component={MedicationListScreen}
      />
      <ListStack.Screen name="Add Medication List" component={AddList} />
    </ListStack.Navigator>
  );
};

export default MedicationStack;
