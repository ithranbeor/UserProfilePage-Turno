import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Introduction = ({ text }) => {
  return (
    <View style={styles.introductionBox}>
      <Text style={styles.introText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  introductionBox: {
    backgroundColor: '#2c3a48',
    borderRadius: 20,
    padding: 20,
    width: '90%',
    alignItems: 'center',
  },
  introText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default Introduction;
