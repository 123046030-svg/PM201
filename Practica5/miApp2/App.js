import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  View,
  Text,
  Button,
  SafeAreaView,
  ScrollView
} from 'react-native';

import TarjetasScreen from './Screens/TarjetasScreen';
import Componente1 from './Screens/Componente1';

export default function App() {
  const [screen, setScreen] = useState('menu');

  // Práctica equipo 1: Lista de tareas
  const [tareas, setTareas] = useState([
    'Ir al gym',
    'Ir a clase',
    'Pasear a Wisky',
  ]);

  const agregarTarea = () => {
    setTareas([...tareas, `Nueva tarea ${tareas.length + 1}`]);
  };

  if (screen === 'tarjetas') {
    return (
      <TarjetasScreen
        onVolver={() => setScreen('menu')}
      />
    );
  }

  if (screen === 'componente1') {
    return (
      <Componente1
        onVolver={() => setScreen('menu')}
      />
    );
  }

  if (screen === 'tareas') {
    return (
      <SafeAreaView style={styles.tareasContainer}>
        <Text style={styles.titulo}>Lista de tareas</Text>

        <View style={styles.boton}>
          <Button
            title="Agregar tarea"
            onPress={agregarTarea}
          />
        </View>

        <ScrollView contentContainerStyle={styles.lista}>
          {tareas.map((tarea, index) => (
            <View key={index} style={styles.tarea}>
              <Text>{tarea}</Text>
            </View>
          ))}
        </ScrollView>

        <View style={styles.boton}>
          <Button
            title="Volver al menú"
            onPress={() => setScreen('menu')}
          />
        </View>

        <StatusBar style="auto" />
      </SafeAreaView>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Menú de prácticas</Text>

      <View style={styles.boton}>
        <Button
          title="Tarjetas"
          onPress={() => setScreen('tarjetas')}
        />
      </View>

      <View style={styles.boton}>
        <Button
          title="Práctica Componente 1"
          onPress={() => setScreen('componente1')}
        />
      </View>

      <View style={styles.boton}>
        <Button
          title="Lista de tareas"
          onPress={() => setScreen('tareas')}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    justifyContent: 'center',
  },

  tareasContainer: {
    flex: 1,
    padding: 25,
  },

  titulo: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },

  boton: {
    marginBottom: 10,
  },

  lista: {
    paddingTop: 20,
  },

  tarea: {
    marginBottom: 10,
    padding: 15,
    backgroundColor: '#ddd',
    borderRadius: 8,
  },
});