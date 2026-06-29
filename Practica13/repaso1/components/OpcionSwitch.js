import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

export default function OpcionSwitch({ pregunta, valor, cambiarValor }) {
  return (
    <View style={styles.fila}>
      <Text style={styles.pregunta}>{pregunta}</Text>

      <Switch
        value={valor}
        onValueChange={cambiarValor}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  fila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
  },

  pregunta: {
    fontSize: 15,
  },
});