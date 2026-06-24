import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Button, Switch } from 'react-native';
import React from 'react';

import TarjetasScreen from './TarjetasScreen';
import PressableScreen from './PressableScreen';
import Componente1 from '../Componente1';

export default function MenuScreen() {
  const [screen, setScreen] = React.useState('menu');
  const [encendido, setEncendido] = React.useState(false);

  switch (screen) {
    case 'tarjetas':
      return <TarjetasScreen />;

    case 'componente1':
      return <Componente1 />;

    case 'pressable':
      return <PressableScreen />;

    case 'menu':
    default:
      return (
        <View style={styles.container}>
          <Text style={styles.titulo}>Menú de prácticas</Text>

          <Button title="Tarjetas" onPress={() => setScreen('tarjetas')} />

          <Button
            title="Práctica Componente 1"
            onPress={() => setScreen('componente1')}
          />

          <Button title="Pressable" onPress={() => setScreen('pressable')} />

          <View style={styles.switchContainer}>
            <Text style={styles.texto}>
              Switch: {encendido ? 'Encendido' : 'Apagado'}
            </Text>

            <Switch value={encendido} onValueChange={setEncendido} />
          </View>

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
    gap: 12,
  },

  titulo: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },

  switchContainer: {
    marginTop: 15,
    alignItems: 'center',
  },

  texto: {
    fontSize: 16,
    marginBottom: 8,
  },
});