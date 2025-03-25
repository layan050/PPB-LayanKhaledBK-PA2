import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PersonalInfo = ({ bio }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Personal Information</Text>
      <Text>NPM: {bio.identity.npm}</Text>
      <Text>Name: {bio.identity.firstname} {bio.identity.middlename} {bio.identity.lastname}</Text>
      <Text>Phone: {bio.mobile_phone}</Text>
      <Text>Email: {bio.email}</Text>
      <Text>Gender: {bio.gender}</Text>
      <Text>Height: {bio.tall_body} cm</Text>
      <Text>Weight: {bio.weight_body} kg</Text>
      
      <Text style={styles.title}>Education</Text>
      {bio.educations.map((edu) => (
        <Text key={edu.id}>- {edu.school}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    width: '90%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default PersonalInfo;
