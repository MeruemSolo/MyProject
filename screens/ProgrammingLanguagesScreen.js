import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProgrammingLanguagesScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.languageContainer}>
        <Image source={require('../assets/python.png')} style={styles.logo} />
        <Text style={styles.languageName}>Python</Text>
        <Text>Опыт: 3 года разработки на Python, работа с Django.</Text>
      </View>

      <View style={styles.languageContainer}>
        <Image source={require('../assets/javascript.png')} style={styles.logo} />
        <Text style={styles.languageName}>JavaScript</Text>
        <Text>Опыт: 4 года работы с React и Node.js.</Text>
      </View>

      <View style={styles.languageContainer}>
        <Image source={require('../assets/java.png')} style={styles.logo} />
        <Text style={styles.languageName}>Java</Text>
        <Text>Опыт: 2 года разработки на Java, работа с Spring & Hibernate.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  languageContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  languageName: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default ProgrammingLanguagesScreen;