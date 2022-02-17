import React, {useState} from 'react';
import {Text, StyleSheet, View, TextInput, Button} from 'react-native';

const AddList = () => {
  return (
    <View>
      {/* <Text style={{fontSize: 20, marginLeft: 30, marginTop: 20}}>
        Appointment
      </Text> */}
      <View>
        <TextInput placeholder="Weight" style={styles.input} />
        <TextInput placeholder="Blood Pressure" style={styles.input} />
        <TextInput placeholder="Cholestrol" style={styles.input} />
        <TextInput placeholder="Obesity" style={styles.input} />
        <TextInput placeholder="Admitted Date" style={styles.input} />
        <TextInput placeholder="Discharge Date" style={styles.input} />
        <TextInput placeholder="Discharge Notes" style={styles.input} />
        <TextInput placeholder="Fully Medical History" style={styles.input} />
      </View>

      <View style={styles.btn}>
        <Button title="save" />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  btn: {
    marginHorizontal: 50,
    marginTop: 20,
  },
  input: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginHorizontal: 30,
    marginTop: 15,
  },
});

export default AddList;
