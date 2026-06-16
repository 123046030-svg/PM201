/* JUSTIFYCOMRNENT: FLEX START
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

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
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
*/


/* JUSTIFYCOMRNENT: CENTER
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

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
}); */

 /* JUSTIFYCONTENT: FLEX-END 
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

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
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
}); */

/* JUSTIFYCONTENT: SPACE-BETWEEN 
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

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
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
}); */

/* JUSTIFYCONTENT: SPACE-AROUND 
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

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
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
}); */

/* JUSTIFYCONTENT: SPACE-EVENLY 
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

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
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
*/

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

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
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