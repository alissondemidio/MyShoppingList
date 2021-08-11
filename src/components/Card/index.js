import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const Card = () => {
  return (
    <View style={styles.container}>
      <View style={styles.animation}>
        <Text>Lottie animation</Text>
      </View>
      <TouchableOpacity
        style={[styles.button, {backgroundColor: '#555'}]}
        onPress={() => console.log('ói')}>
        <Text style={styles.buttonText}>buttonText</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: '70%',
    backgroundColor: '#fff',
    alignSelf: 'center',
    alignItems: 'center',
    padding: 5,
    margin: 20,
    borderRadius: 20,
    justifyContent: 'space-evenly',
  },
  animation: {
    height: '60%',
    width: '100%',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 80,
    width: '80%',
    height: '15%',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Card;
