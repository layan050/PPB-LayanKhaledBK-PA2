import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PersonalInfo from './PersonalInfo';

class Profile extends Component {
  state = {
    MyBio: {
      identity: {
        npm: 212310056,
        firstname: "MUHAMMAD",
        middlename: "ZIDAN",
        lastname: "AKBAR",
      },
      educations: [
        { id: 1, school: "SDN 1 Kota Bogor" },
        { id: 2, school: "SMPN 1 Kota Bogor" },
        { id: 3, school: "SMAN 1 Kota Bogor" },
      ],
      mobile_phone: "0812345679",
      email: "212310056@student.ibik.ac.id",
      gender: "M",
      tall_body: 175,
      weight_body: 64.5,
    },
  };

  render() {
    return (
      <View style={styles.container}>
        <PersonalInfo bio={this.state.MyBio} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default Profile;
