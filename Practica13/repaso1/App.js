import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import RegistroEvento from './components/RegistroEvento';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <RegistroEvento />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});