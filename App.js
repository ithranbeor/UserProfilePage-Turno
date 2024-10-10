import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native'; // Make sure to import TouchableOpacity
import Avatar from './components/Avatar';
import InfoBox from './components/InfoBox';
import Introduction from './components/Introduction';
import Footer from './components/Footer';
import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <View style={[styles.container, isDarkMode ? styles.darkContainer : styles.lightContainer]}>
      <Avatar
        imageSource={require('./assets/ithran.jpg')}
        name="Ithran Beor Turno"
        location="Cagayan de Oro, Philippines"
      />

      <Introduction
        text="This is my project in Mobile Programming. I am Ithran Beor Turno and I am 21 years old from barangay Puntod, Cagayan de Oro City."
      />

      <InfoBox />

      {/* Toggle Button with Sun and Moon Icons */}
      <TouchableOpacity style={styles.toggleButton} onPress={toggleTheme}>
        <Icon name={isDarkMode ? 'sun-o' : 'moon-o'} size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  darkContainer: {
    backgroundColor: '#2c3a48',
  },
  lightContainer: {
    backgroundColor: '#f5f5f5',
  },
  toggleButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
