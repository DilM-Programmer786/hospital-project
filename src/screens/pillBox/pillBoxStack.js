import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PillBoxScreen from './pillBox';
import AddPillBox from './addPillBox';

const PillStack = createNativeStackNavigator();

const PillBoxStack = () => {
  return (
    <PillStack.Navigator>
      <PillStack.Screen name="Pill Box" component={PillBoxScreen} />
      <PillStack.Screen name="Add To Pill Box" component={AddPillBox} />
    </PillStack.Navigator>
  );
};

export default PillBoxStack;
