import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export const Perfil = ({
  nombre,
  carrera,
  materia,
  cuatrimestre,
  style,
}) => {
  const [mostrar, setMostrar] = useState(false);

  return (
    <View style={[styles.tarjeta, style]}>
      <Text style={styles.nombre}>{nombre}</Text>

      {mostrar && (
        <>
          <Text style={styles.carrera}>Carrera: {carrera}</Text>
          <Text style={styles.otroTexto}>Materia: {materia}</Text>
          <Text style={styles.otroTexto}>
            Cuatrimestre: {cuatrimestre}
          </Text>
        </>
      )}

      <Button
        title={mostrar ? 'Ocultar perfil' : 'Ver perfil'}
        onPress={() => setMostrar(!mostrar)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  tarjeta: {
    borderWidth: 2,
    padding: 25,
    margin: 20,
  },

  nombre: {
    fontSize: 24,
    fontWeight: '600',
    textTransform: 'uppercase',
  },

  carrera: {
    fontSize: 18,
    color: 'green',
  },

  otroTexto: {
    fontSize: 12,
    fontFamily: 'Courier',
    fontStyle: 'italic',
  },
});

/*import { View, Text, StyleSheet } from 'react-native';

export const Perfil = () => {
  return (
    <View>
      <Text>Nombre: Regina Cortes Vargas</Text>

      <Text>
        Carrera: Ingeniería en Sistemas Computacionales
    </Text>

      <Text>
        Materia: Programación Móvil
      </Text>

      <Text>Cuatrimestre: 9no</Text>
    </View>
  );
};
*/