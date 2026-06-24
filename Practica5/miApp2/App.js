import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  View,
  Text,
  Button,
  SafeAreaView,
  ScrollView,
  Pressable,
  Switch,
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

  // Práctica equipo 2: Pressable
  const [contador, setContador] = useState(0);

  // Práctica equipo 2: Switch
  const [encendido, setEncendido] = useState(false);

  const agregarTarea = () => {
    setTareas([...tareas, `Nueva tarea ${tareas.length + 1}`]);
  };

  if (screen === 'tarjetas') {
    return <TarjetasScreen onVolver={() => setScreen('menu')} />;
  }

  if (screen === 'componente1') {
    return <Componente1 onVolver={() => setScreen('menu')} />;
  }

  if (screen === 'pressable') {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Componente Pressable</Text>

        <Pressable
          onPress={() => setContador(contador + 1)}
          onLongPress={() => setContador(0)}
          style={({ pressed }) => [
            styles.botonPressable,
            { backgroundColor: pressed ? '#FF6B6B' : '#6BCB77' },
          ]}
        >
          <Text style={styles.textoBoton}>Presióname</Text>
        </Pressable>

        <Text>Contador: {contador}</Text>
        <Text>Mantén presionado para reiniciar</Text>

        <View style={styles.boton}>
          <Button title="Volver al menú" onPress={() => setScreen('menu')} />
        </View>
      </View>
    );
  }

  if (screen === 'switch') {
    return (
      <View
        style={[
          styles.container,
          { backgroundColor: encendido ? '#222' : '#FFF' },
        ]}
      >
        <Text
          style={{
            color: encendido ? 'white' : 'black',
            fontSize: 18,
          }}
        >
          {encendido ? 'Modo Oscuro Activado' : 'Modo Oscuro Desactivado'}
        </Text>

        <Switch
          value={encendido}
          onValueChange={setEncendido}
          trackColor={{
            false: '#767577',
            true: '#81b0ff',
          }}
          thumbColor={encendido ? '#2196F3' : '#f4f3f4'}
        />

        <View style={styles.boton}>
          <Button title="Volver al menú" onPress={() => setScreen('menu')} />
        </View>
      </View>
    );
  }

  if (screen === 'tareas') {
    return (
      <SafeAreaView style={styles.tareasContainer}>
        <Text style={styles.titulo}>Lista de tareas</Text>

        <View style={styles.boton}>
          <Button title="Agregar tarea" onPress={agregarTarea} />
        </View>

        <ScrollView contentContainerStyle={styles.lista}>
          {tareas.map((tarea, index) => (
            <View key={index} style={styles.tarea}>
              <Text>{tarea}</Text>
            </View>
          ))}
        </ScrollView>

        <View style={styles.boton}>
          <Button title="Volver al menú" onPress={() => setScreen('menu')} />
        </View>

        <StatusBar style="auto" />
      </SafeAreaView>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Menú de prácticas</Text>

      <View style={styles.boton}>
        <Button title="Tarjetas" onPress={() => setScreen('tarjetas')} />
      </View>

      <View style={styles.boton}>
        <Button title="Práctica Componente 1" onPress={() => setScreen('componente1')} />
      </View>

      <View style={styles.boton}>
        <Button title="Lista de tareas" onPress={() => setScreen('tareas')} />
      </View>

      <View style={styles.boton}>
        <Button title="Pressable" onPress={() => setScreen('pressable')} />
      </View>

      <View style={styles.boton}>
        <Button title="Switch" onPress={() => setScreen('switch')} />
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
    alignItems: 'center',
    gap: 15,
  },

  tareasContainer: {
    flex: 1,
    padding: 25,
  },

  titulo: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
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

  botonPressable: {
    padding: 15,
    borderRadius: 10,
    width: 180,
    alignItems: 'center',
  },

  textoBoton: {
    color: 'white',
    fontWeight: 'bold',
  },
});