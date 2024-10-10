import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const Avatar = ({ imageSource, name, location }) => {
  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.avatar} />
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
      </View>
      <View style={styles.locationContainer}>
        <Text style={styles.location}>{location}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 40,
    marginBottom: 10,
  },
  nameContainer: {
    backgroundColor: '#2c3a48',
    borderRadius: 20, // Adjust border radius here
    padding: 5, // Add some padding for better appearance
    top: -5,
  },
  name: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
  },
  locationContainer: {
    backgroundColor: '#2c3a48',
    borderRadius: 15, // Adjust border radius here
    padding: 5, // Add some padding for better appearance
  },
  location: {
    color: '#dcdcdc',
    fontSize: 14,
  },
});

export default Avatar;
