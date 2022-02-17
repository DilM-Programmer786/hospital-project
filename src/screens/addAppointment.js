import React, {useState} from 'react';
import {Text, StyleSheet, View, TextInput, Button} from 'react-native';

const AddAppointment = () => {
  const [currency, setCurrency] = useState('US Dollar');
  return (
    <View>
      <Text style={{fontSize: 20, marginLeft: 30, marginTop: 20}}>
        Appointment
      </Text>
      <View>
        <TextInput placeholder="Appointment Info" style={styles.input} />
        <TextInput
          placeholder="Appointment Date and Time"
          style={styles.input}
        />
        <TextInput placeholder="Appointment Type" style={styles.input} />
        <TextInput placeholder="Diagnosis Information" style={styles.input} />
        <TextInput placeholder="Prescription Info" style={styles.input} />
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

export default AddAppointment;
