/*zona de importaciones*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import React,{useState} from 'react'
import TargetasScreen from './TargetasScreen';
import SaveAreaScreen from './SafeAreaScreen';

/*zona main*/
export default function MenuScreen() {
  const[Screen, setScreen]= useState('menu');

  switch(Screen){
    case 'targetas':
      return <TargetasScreen/>;
    case 'safearea':
      return <SaveAreaScreen/>;
    case 'menu':
    default:
  
    return (
    <View style={styles.container}>
        <Button title='practica targetas' onPress={()=>setScreen('targetas')}/>
        <Button title='practica SaveArea' onPress={()=>setScreen('safearea')}/>
        <Button title= 'practica targetas'/>
        <StatusBar style="auto" />
     
    </View>
  
);
 
  }

}
/* estilos y posisionamiento*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column',
    gap: 20,
  },


});
