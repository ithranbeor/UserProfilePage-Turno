import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const Footer = ({ iconSource, text }) => {
  return (
    <View style={styles.footer}>
      <Image source={iconSource} style={styles.homeIcon} />
      <Text style={styles.footerText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 20,
    alignItems: 'center',
  },
  homeIcon: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  footerText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Footer;
