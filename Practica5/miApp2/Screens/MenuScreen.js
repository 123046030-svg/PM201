import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Button } from 'react-native';
import React from 'react';

import TarjetasScreen from './TarjetasScreen';
import Componente1 from '../Componente1';

export default function App() {
  const [screen, setScreen] = React.useState('menu');

  switch (screen) {
    case 'tarjetas':
      return <TarjetasScreen />;

    case 'componente1':
      return <Componente1 />;

    case 'menu':
    default:
      return (
        <View style={styles.container}>
          <Text style={styles.titulo}>Menú de prácticas</Text>

          <Button
            title="Tarjetas"
            onPress={() => setScreen('tarjetas')}
          />

          <Button
            title="Práctica Componente 1"
            onPress={() => setScreen('componente1')}
          />

          <StatusBar style="auto" />
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    justifyContent: 'center',
  },

  titulo: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
});