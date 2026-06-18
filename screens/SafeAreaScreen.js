/*zona de importaciones*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-save-area-context';
/*zona main*/
export default function SaveAreaScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
     
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


});
