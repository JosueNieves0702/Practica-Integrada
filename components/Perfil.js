/*perfil con desestructuracion*/
import React, { useState } from 'react';
import { View, Text, Button,StyleSheet } from 'react-native';

export const Perfil = ({ nombre, carrera, materia, cuatri, style }) => {
  const[mostrar, SetMostrar] = useState(false);
  return (
    <View style={[styles.targeta, style]}> 
      <Text style={styles.nombre}>{nombre}</Text>

      {mostrar && 
        <>
          <Text style={styles.carrera}>{carrera}</Text>
          <Text style={styles.otroTexto}>{materia}</Text>
          <Text style={styles.otroTexto}>{cuatri}</Text>
        </>
      }  
      <Button title={"ver Perfil"} onPress={() => SetMostrar(!mostrar)} />
    </View>
  );
};

export default Perfil;

const styles = StyleSheet.create({
  nombre:{
    fontSize: 24,
    fontWeight: 600,
    textTransform: 'uppercase',
  },

  targeta:{
    borderWidth: 2,
    borderColor: '#000',
    padding: 15,
    margin: 10,
  },
  carrera:{
    fontSize: 18,
    color: 'blue',
    fontFamily: 'Roboto',
  },
  
  otroTexto:{
    fontSize: 12,
    fontFamily: 'Roboto',
    fontStyle: 'italic',
  }
})