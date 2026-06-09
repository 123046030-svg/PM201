import { View, Text, StyleSheet } from 'react-native';

export const Perfil = () => {
  return (
    <View style={styles.perfil}>
      <Text style={styles.texto}>Nombre: Regina Cortes Vargas</Text>

      <Text style={styles.texto}>
        Carrera: Ingeniería en Sistemas Computacionales
      </Text>

      <Text style={styles.texto}>
        Materia: Programación Móvil
      </Text>

      <Text style={styles.texto}>Cuatrimestre: 9</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  perfil: {
    marginTop: 15,
    alignItems: 'center',
  },

  texto: {
    fontSize: 16,
    marginBottom: 6,
  },
});