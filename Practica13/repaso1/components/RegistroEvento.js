import React, { useState } from 'react';
import {
  View,
  Text,
  Alert,
  Pressable,
  StyleSheet,
  Platform,
} from 'react-native';

import CampoTexto from './CampoTexto';
import OpcionSwitch from './OpcionSwitch';

export default function RegistroEvento() {
  const [nombre, setNombre] = useState('');
  const [carrera, setCarrera] = useState('');
  const [semestre, setSemestre] = useState('');

  const [taller, setTaller] = useState(false);
  const [constancia, setConstancia] = useState(false);
  const [deportes, setDeportes] = useState(false);

  const mostrarAlerta = (titulo, mensaje) => {
    if (Platform.OS === 'web') {
      window.alert(`${titulo}\n\n${mensaje}`);
    } else {
      Alert.alert(titulo, mensaje);
    }
  };

  const enviarRegistro = () => {
    if (
      nombre.trim() === '' ||
      carrera.trim() === '' ||
      semestre.trim() === ''
    ) {
      mostrarAlerta(
        'Campos incompletos',
        'Debes llenar todos los campos.'
      );
      return;
    }

    if (!/^[0-9]+$/.test(semestre.trim())) {
      mostrarAlerta(
        'Error',
        'El semestre debe ser un número.'
      );
      return;
    }

    mostrarAlerta(
      'Registro enviado',
      `Nombre: ${nombre}
Carrera: ${carrera}
Semestre: ${semestre}

Taller: ${taller ? 'Sí' : 'No'}
Constancia: ${constancia ? 'Sí' : 'No'}
Deportes: ${deportes ? 'Sí' : 'No'}`
    );
  };

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>
        Registro de Evento Universitario
      </Text>

      <CampoTexto
        placeholder="Nombre completo"
        value={nombre}
        onChangeText={setNombre}
      />

      <CampoTexto
        placeholder="Carrera"
        value={carrera}
        onChangeText={setCarrera}
      />

      <CampoTexto
        placeholder="Semestre"
        value={semestre}
        onChangeText={setSemestre}
      />

      <Text style={styles.subtitulo}>Opciones</Text>

      <OpcionSwitch
        pregunta="¿Asistirá al taller?"
        valor={taller}
        cambiarValor={setTaller}
      />

      <OpcionSwitch
        pregunta="¿Requiere constancia?"
        valor={constancia}
        cambiarValor={setConstancia}
      />

      <OpcionSwitch
        pregunta="¿Participará en deportes?"
        valor={deportes}
        cambiarValor={setDeportes}
      />

      <Pressable style={styles.boton} onPress={enviarRegistro}>
        <Text style={styles.textoBoton}>
          Enviar Registro
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    width: '90%',
    maxWidth: 420,
    borderWidth: 3,
    borderColor: '#000',
    padding: 20,
    backgroundColor: '#fff',
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25,
  },

  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 15,
  },

  boton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 6,
    marginTop: 25,
    alignItems: 'center',
  },

  textoBoton: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});