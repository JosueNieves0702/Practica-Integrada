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
      <Image source={require('./assets/wave.png')} />
      <Text>hola mundo react native</Text>
      <Text>----------------------------------------</Text>
      <StatusBar style="auto" />
      <Perfil nombre="Joaquin Josue Moreno Nieves" carrera="Ingeniería en Sistemas Computacionales" materia=" Móvil" cuatri="9" />
      <Perfil 
      nombre="Jose Luis Moreno" 
      carrera="Mecanica " 
      materia=" holap" 
      cuatri="9" />

    </View>
  );k
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
