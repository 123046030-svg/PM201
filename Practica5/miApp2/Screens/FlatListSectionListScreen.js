import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  SectionList,
  Pressable,
  ScrollView,
} from 'react-native';

export default function FlatListSectionListScreen({ volverMenu }) {
  const estudiantes = [
    {
      id: '1',
      nombre: 'Sebastián',
      carrera: 'ISC',
    },
    {
      id: '2',
      nombre: 'Regina',
      carrera: 'ISC',
    },
    {
      id: '3',
      nombre: 'Misael',
      carrera: 'ISC',
    },
  ];

  const estudiantesPorCarrera = [
    {
      title: 'Ingeniería en Sistemas',
      data: [
        { id: '1', nombre: 'Sebastián' },
        { id: '2', nombre: 'Regina' },
      ],
    },
    {
      title: 'Tecnologías de Información',
      data: [
        { id: '3', nombre: 'Misael' },
        { id: '4', nombre: 'Juan Pablo' },
      ],
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.titulo}>FlatList & SectionList</Text>

        <Text style={styles.subtitulo}>Ejemplo con FlatList</Text>

        <FlatList
          data={estudiantes}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.textoCard}>Nombre: {item.nombre}</Text>
              <Text style={styles.textoCard}>Carrera: {item.carrera}</Text>
            </View>
          )}
        />

        <Text style={styles.subtitulo}>Ejemplo con SectionList</Text>

        <SectionList
          sections={estudiantesPorCarrera}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
          renderSectionHeader={({ section }) => (
            <Text style={styles.header}>{section.title}</Text>
          )}
          renderItem={({ item }) => (
            <Text style={styles.item}>{item.nombre}</Text>
          )}
        />

        <Pressable style={styles.boton} onPress={volverMenu}>
          <Text style={styles.textoBoton}>Volver al menú</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: '#ffffff',
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },

  subtitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10,
  },

  card: {
    backgroundColor: '#6BCB77',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
  },

  textoCard: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  header: {
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#90caf9',
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
  },

  item: {
    fontSize: 16,
    backgroundColor: '#eeeeee',
    padding: 12,
    marginVertical: 5,
    borderRadius: 8,
  },

  boton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 20,
  },

  textoBoton: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});