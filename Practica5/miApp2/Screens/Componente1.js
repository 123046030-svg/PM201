import { View, Text, Button, StyleSheet } from 'react-native';

export default function Componente1({ onVolver }) {
  return (
    <View style={styles.container}>
      <View style={styles.tarjeta}>
        <Text>
          Aquí va la primera práctica de componentes nativos
        </Text>
      </View>

      <Button
        title="Volver al menú"
        onPress={onVolver}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },

  tarjeta: {
    borderWidth: 2,
    padding: 25,
    margin: 20,
  },
});