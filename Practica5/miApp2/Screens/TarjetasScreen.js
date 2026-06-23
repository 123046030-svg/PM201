import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button } from 'react-native';

import { Perfil } from '../components/Perfil';

export default function TarjetasScreen({ onVolver }) {
  return (
    <View style={styles.pantalla}>
      <Button
        title="Volver al menú"
        onPress={onVolver}
      />

      <View style={styles.container}>
        <Perfil
          nombre="Regina Cortes Vargas"
          carrera="Ingeniería en Sistemas Computacionales"
          materia="Programación Móvil"
          cuatrimestre="9no"
          style={styles.tarjetaNaranja}
        />

        <Perfil
          nombre="Dalixia de la Torre"
          carrera="Ingeniería en Sistemas Computacionales"
          materia="Programación Móvil"
          cuatrimestre="10mo"
          style={styles.tarjetaVerde}
        />

        <Perfil
          nombre="Alonso García"
          carrera="Ingeniería en Sistemas Computacionales"
          materia="Programación Móvil"
          cuatrimestre="9no"
          style={styles.tarjetaAzul}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  pantalla: {
    flex: 1,
    padding: 20,
  },

  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  },

  tarjetaNaranja: {
    backgroundColor: '#ea9969',
  },

  tarjetaVerde: {
    backgroundColor: '#a1eec1',
  },

  tarjetaAzul: {
    backgroundColor: '#9ec5fe',
  },
});