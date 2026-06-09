import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Saludo} from './components/Saludo';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/wave.png')} />
      <Text>Hola Mundo React Native</Text>
      <Text>---------------------------</Text>
      <Saludo />
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
