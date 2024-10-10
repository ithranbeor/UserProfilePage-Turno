import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const InfoBox = () => {
  return (
    <View style={styles.infoBox}>
      {/* Professional Info */}
      <View style={styles.infoItem}>
        <Text style={styles.infoHeader}>Student</Text>
        <Text style={styles.infoLabel}>Profession</Text>
      </View>
      <View style={styles.infoItem}>
        <Text style={styles.infoHeader}>USTP</Text>
        <Text style={styles.infoLabel}>University/School</Text>
      </View>
      <View style={styles.infoItem}>
        <Text style={styles.infoHeader}>3rd Year</Text>
        <Text style={styles.infoLabel}>Year/Grade</Text>
      </View>

      {/* Interests Info - Separated into another container */}
      <View style={styles.interestContainer}>
        <Text style={styles.interestHeader}>Interests</Text>
        <View style={styles.interestItem}>
          <Text style={styles.interestDetail}>Music</Text>
        </View>
        <View style={styles.interestItem}>
          <Text style={styles.interestDetail}>Songwriting</Text>
        </View>
        <View style={styles.interestItem}>
          <Text style={styles.interestDetail}>Travel</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  infoBox: {
    backgroundColor: '#2c3a48',
    borderRadius: 20,
    padding: 20,
    width: '90%',
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  infoItem: {
    alignItems: 'center',
    marginBottom: 10,
  },
  infoHeader: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  infoLabel: {
    color: '#dcdcdc',
    fontSize: 10,
  },
  interestContainer: {
    marginTop: 15, // Space between info items and interests
    width: '100%', // Ensure it takes the full width of the container
    alignItems: 'center', // Center-align interest items
  },
  interestHeader: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  interestItem: {
    marginBottom: 5, // Space between interest items
  },
  interestDetail: {
    color: '#dcdcdc',
    fontSize: 14,
  },
});

export default InfoBox;
