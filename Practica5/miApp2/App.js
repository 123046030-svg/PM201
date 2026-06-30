import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  SafeAreaView,
  ScrollView,
  Switch,
  TextInput,
  Alert,
} from 'react-native';

import TarjetasScreen from './Screens/TarjetasScreen';
import Componente1 from './Screens/Componente1';
import PressableScreen from './Screens/PressableScreen';
import SwitchScreen from './Screens/SwitchScreen';
import FlatListSectionListScreen from './Screens/FlatListSectionListScreen';

export default function App() {
  const [screen, setScreen] = useState('menu');

  const [tareas, setTareas] = useState([
    'Ir al gimnasio',
    'Asistir a clases',
    'Pasar lista',
  ]);

  const [nombre, setNombre] = useState('');

  const volverMenu = () => {
    setScreen('menu');
  };

  const agregarTarea = () => {
    setTareas([...tareas, `Nueva tarea ${tareas.length + 1}`]);
  };

  if (screen === 'tarjetas') {
    return (
      <SafeAreaView style={styles.pantalla}>
        <TarjetasScreen />
        <BotonVolver volverMenu={volverMenu} />
      </SafeAreaView>
    );
  }

  if (screen === 'componente1') {
    return (
      <SafeAreaView style={styles.pantalla}>
        <Componente1 />
        <BotonVolver volverMenu={volverMenu} />
      </SafeAreaView>
    );
  }

  if (screen === 'tareas') {
    return (
      <SafeAreaView style={styles.pantalla}>
        <Text style={styles.tituloPantalla}>Lista de tareas</Text>

        <Pressable style={styles.boton} onPress={agregarTarea}>
          <Text style={styles.textoBoton}>Agregar tarea</Text>
        </Pressable>

        <ScrollView>
          {tareas.map((tarea, index) => (
            <View key={index} style={styles.card}>
              <Text style={styles.textoCard}>{tarea}</Text>
            </View>
          ))}
        </ScrollView>

        <BotonVolver volverMenu={volverMenu} />
      </SafeAreaView>
    );
  }

  if (screen === 'pressable') {
    return (
      <SafeAreaView style={styles.pantalla}>
        <PressableScreen />
        <BotonVolver volverMenu={volverMenu} />
      </SafeAreaView>
    );
  }

  if (screen === 'switch') {
    return (
      <SafeAreaView style={styles.pantalla}>
        <SwitchScreen />
        <BotonVolver volverMenu={volverMenu} />
      </SafeAreaView>
    );
  }

  if (screen === 'textinput') {
    return (
      <SafeAreaView style={styles.pantalla}>
        <Text style={styles.tituloPantalla}>Componente TextInput</Text>

        <TextInput
          style={styles.input}
          placeholder="Escribe tu nombre"
          value={nombre}
          onChangeText={setNombre}
        />

        <Text style={styles.textoNormal}>
          Nombre escrito: {nombre}
        </Text>

        <BotonVolver volverMenu={volverMenu} />
      </SafeAreaView>
    );
  }

  if (screen === 'alert') {
    return (
      <SafeAreaView style={styles.pantalla}>
        <Text style={styles.tituloPantalla}>Componente Alert</Text>

        <Pressable
          style={styles.boton}
          onPress={() =>
            Alert.alert(
              'Ejemplo de Alert',
              'Este mensaje fue generado con el componente Alert.'
            )
          }
        >
          <Text style={styles.textoBoton}>Mostrar Alert</Text>
        </Pressable>

        <BotonVolver volverMenu={volverMenu} />
      </SafeAreaView>
    );
  }

  if (screen === 'flatlist-sectionlist') {
    return (
      <FlatListSectionListScreen volverMenu={volverMenu} />
    );
  }

  return (
    <SafeAreaView style={styles.menuContainer}>
      <ScrollView contentContainerStyle={styles.menuScroll}>
        <Pressable onPress={() => setScreen('tarjetas')}>
          <Text style={styles.opcion}>Tarjetas</Text>
        </Pressable>

        <Pressable onPress={() => setScreen('componente1')}>
          <Text style={styles.opcion}>Práctica Componente 1</Text>
        </Pressable>

        <Pressable onPress={() => setScreen('tareas')}>
          <Text style={styles.opcion}>Lista de tareas</Text>
        </Pressable>

        <Pressable onPress={() => setScreen('pressable')}>
          <Text style={styles.opcion}>Pressable</Text>
        </Pressable>

        <Pressable onPress={() => setScreen('switch')}>
          <Text style={styles.opcion}>Switch</Text>
        </Pressable>

        <Pressable onPress={() => setScreen('textinput')}>
          <Text style={styles.opcion}>TextInput</Text>
        </Pressable>

        <Pressable onPress={() => setScreen('alert')}>
          <Text style={styles.opcion}>Alert</Text>
        </Pressable>

        <Pressable onPress={() => setScreen('flatlist-sectionlist')}>
          <Text style={styles.opcion}>FlatList & SectionList</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

function BotonVolver({ volverMenu }) {
  return (
    <Pressable style={styles.botonVolver} onPress={volverMenu}>
      <Text style={styles.textoBoton}>Volver al menú</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  menuContainer: {
    flex: 1,
    backgroundColor: '#000000',
  },

  menuScroll: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },

  opcion: {
    color: '#007bff',
    fontSize: 24,
    marginVertical: 18,
  },

  pantalla: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 25,
  },

  tituloPantalla: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25,
  },

  textoNormal: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },

  boton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
  },

  botonVolver: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },

  textoBoton: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  card: {
    backgroundColor: '#d4f1f4',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
  },

  textoCard: {
    fontSize: 16,
  },

  input: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 20,
  },
});