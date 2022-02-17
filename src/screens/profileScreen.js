import React from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import {Avatar, Title, Text} from 'react-native-paper';

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Avatar.Image
            source={require('../../assets/images/img8.jpeg')}
            size={80}
          />
          <View style={{marginLeft: 20}}>
            <Title
              style={[
                styles.title,
                {
                  marginTop: 25,
                  marginBottom: 5,
                },
              ]}>
              John Doe
            </Title>
          </View>
        </View>
      </View>

      <View style={[styles.userInfoSection, {marginTop: 10, marginLeft: 10}]}>
        <View style={styles.row}>
          <Text style={styles.text}>Gender :</Text>
          <Text style={styles.text}>Age :</Text>
          <Text style={styles.text}>Address :</Text>
          <Text style={styles.text}>User ID :</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text1}>Male</Text>
          <Text style={styles.text1}>20</Text>
          <Text style={styles.text1}>street 1,London,uk</Text>
          <Text style={styles.text1}>123</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: '#777777',
    marginTop: 20,
    fontSize: 20,
  },
  text1: {
    color: '#777777',
    marginTop: 20,
    marginLeft: 20,
    fontSize: 20,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
    marginTop: 25,
    flexDirection: 'row',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'column',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});
