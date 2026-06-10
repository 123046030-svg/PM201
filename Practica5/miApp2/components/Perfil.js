import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

export const Perfil = ({
  nombre,
  carrera,
  materia,
  cuatrimestre,
}) => {
  const [mostrar, setMostrar] = useState(false);

  return (
    <View>
      <Text>Nombre: {nombre}</Text>

      {mostrar && (
        <>
          <Text>Carrera: {carrera}</Text>
          <Text>Materia: {materia}</Text>
          <Text>Cuatrimestre: {cuatrimestre}</Text>
        </>
      )}

      <Button
        title={mostrar ? 'Ocultar perfil' : 'Ver perfil'}
        onPress={() => setMostrar(!mostrar)}
      />
    </View>
  );
};


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