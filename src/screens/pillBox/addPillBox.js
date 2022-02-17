import React, {useState} from 'react';
import {Text, StyleSheet, View, TextInput, Button} from 'react-native';

const AddPillBox = () => {
  return (
    <View>
      {/* <Text style={{fontSize: 20, marginLeft: 30, marginTop: 20}}>
        Appointment
      </Text> */}
      <View>
        <TextInput placeholder="Name of Medication" style={styles.input} />
        <TextInput placeholder="Schedule" style={styles.input} />
        <TextInput placeholder="Times" style={styles.input} />
        <TextInput placeholder="Pill Count" style={styles.input} />
        <TextInput placeholder="Start date" style={styles.input} />
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
    padding: 20,
    borderWidth: 1,
    borderColor: 'black',
    marginHorizontal: 30,
    marginTop: 30,
  },
});

export default AddPillBox;
