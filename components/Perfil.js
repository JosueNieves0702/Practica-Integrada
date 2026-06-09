/*perfil con desestructuracion*/
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

export const Perfil = ({ nombre, carrera, materia, cuatri }) => {
  const[mostrar, SetMostrar] = useState(false);
  return (
    <View>
      <Text>{nombre}</Text>

      {mostrar && 
        <>
          <Text>{carrera}</Text>
          <Text>{materia}</Text>
          <Text>{cuatri}</Text>
        </>
      }  
      <Button title={"ver Perfil"} onPress={() => SetMostrar(!mostrar)} />
    </View>
  );
};

export default Perfil;