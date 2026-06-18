/*zona de importaciones*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button} from 'react-native';
import Perfil from '../components/Perfil';
/*zona main*/
export default function TargetasScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Perfil style={styles.targetaVerde} nombre="Joaquin Josue Moreno" carrera="ISC" materia=" Móvil" cuatri="9" />
      <Perfil style={styles.targetaRoja} nombre="Jose Luis Moreno" carrera="Mecanica " materia=" holap" cuatri="9" />
      <Perfil style={styles.targetaVerde} nombre="Julian Perez" carrera="ISC" materia=" Móvil" cuatri="9" />

     
    </View>
  );
}


  /* estilos y posisionamiento*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },

  targetaVerde:{
    backgroundColor: '#357435',
  },
  targetaRoja:{
    backgroundColor: '#710909',
  },
});
