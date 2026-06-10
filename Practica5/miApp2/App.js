import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import { Perfil } from './components/Perfil';

export default function App() {
  return (
    <View style={styles.container}>
      <Perfil
        nombre="Regina Cortes Vargas"
        carrera="Ingeniería en Sistemas Computacionales"
        materia="Programación Móvil"
        cuatrimestre="9no"
      />

      <Perfil
        nombre="Dalixia de la Torre"
        carrera="Ingeniería en Sistemas Computacionales"
        materia="Programación Móvil"
        cuatrimestre="10mo"
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});