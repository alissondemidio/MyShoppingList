import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const Card = ({color}) => {
  return (
    <View style={styles.container}>
      <View style={styles.animation}>
        <Text>Lottie animation</Text>
      </View>
      <TouchableOpacity
        style={[styles.button, {backgroundColor: color}]}
        onPress={() => console.log('ói')}>
        <Text style={styles.buttonText}>buttonText</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    backgroundColor: '#fff',
    alignSelf: 'center',
    alignItems: 'center',
    padding: 20,
    margin: 20,
    marginBottom: 30,
    borderRadius: 20,
    justifyContent: 'space-between',
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
    height: '10%',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Card;
