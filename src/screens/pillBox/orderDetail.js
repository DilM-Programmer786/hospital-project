import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const OrderDetail = () => {
  return (
    <View style={[styles.userInfoSection, {marginTop: 10, marginLeft: 10}]}>
      <View style={styles.row}>
        <Text style={styles.text}>Medication Name :</Text>
        <Text style={styles.text}>Order Date :</Text>
        <Text style={styles.text}>Qty :</Text>
        <Text style={styles.text}>Unit Price :</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text1}>panadol</Text>
        <Text style={styles.text1}>20/2/2022</Text>
        <Text style={styles.text1}>6</Text>
        <Text style={styles.text1}>100</Text>
      </View>
    </View>
  );
};

export default OrderDetail;

const styles = StyleSheet.create({
  userInfoSection: {
    padding: 30,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'black',
    marginHorizontal: 20,
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'column',
    marginBottom: 10,
  },
  text: {
    color: '#777777',
    marginTop: 5,
    fontSize: 20,
  },
  text1: {
    color: '#777777',
    marginTop: 5,
    fontSize: 20,
  },
});
