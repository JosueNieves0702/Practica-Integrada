/*zona de importaciones*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Saludo } from './components/Saludo';
import {Saludo2} from './components/Saludo2';
import Perfil from './components/Perfil';
/*zona main*/
export default function App() {
  return (
    <View style={styles.container}>
      <Text>hola mundo react native</Text>
      <Text>--------------------------------</Text>
      <Saludo></Saludo>
      <Saludo />
      <Text>----------------------------------------</Text>
      <Saludo2></Saludo2>
      <Image source={require('./assets/wave.png')} />
      <StatusBar style="auto" />
      <Perfil></Perfil>
    </View>
  );
}
/* estilos y posisionamiento*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
