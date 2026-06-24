import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, Alert, Platform, Button } from 'react-native';

export default function TextInputAlertScreen() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [numero, setNumero] = useState('');
  const [telefono, setTelefono] = useState('');
  const [busqueda, setBusqueda] = useState('');
  const [comentario, setComentario] = useState('');
  const [decimal, setDecimal] = useState('');

  const campos = [
    {label: 'Nombre', value: nombre},
    {label: 'email', value: email},
    {label: 'Contraseña', value: pass ? 'Ingresada' : 'No ingresada'},
    {label: 'Edad', value: numero},
  ];

  const mostrarAlerta = (titulo, mensaje, botones) => {
    if (Platform.OS === 'web'){
      alert(`${titulo}\n\n${mensaje}`); // Corregido 'Alert' por 'alert' nativo de web y las comillas invertidas
      return;
    }
    Alert.alert(titulo, mensaje, botones); // Corregido 'tirulo' por 'titulo'
  }

  //Alert 1
  const confirmarEnvio = () => {
    mostrarAlerta(
      'Confirmar Envío',
      'Si estas seguro de confirmar el envio?',
      [
        {
          text: 'Cancelar',
          onPress: () => mostrarAlerta('Cancelado', 'No se envio nada'),
          style: 'cancel',
        },
        {
          text: 'Confirmar',
          onPress: () => mostrarAlerta('Enviado', 'Se ha enviado el formulario')
        },
      ]
    );
  };

  //Alert 2
  const validarNombre = () => {
      if (nombre === ''){
          mostrarAlerta('Campo vacio', 'Por favor escribe tu nombre');
      } else {
          mostrarAlerta('Nombre guardado', `hola ${nombre}, tu nombre ah sido guardado`);
      }
  };

  //Alert 3
  const validarEmail = () => {
      if (email === ''){
          mostrarAlerta('Error', 'Ingresa un email');
      } else if (!email.includes('@')){
        mostrarAlerta('Error', 'Ingresa un email valido');
      } else {
          mostrarAlerta('Tu email es valido', 'Felicidades')
      }
  };

  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={styles.centerContent}
    >
      <Text style={styles.label}>Ejemplos de input</Text>

      <Text style={styles.label}>Nombre</Text>
      <TextInput
        value= {nombre}
        onChangeText={setNombre}
        placeholder='Escribe tu nombre...'
        autoCapitalize='words'
        style={styles.input}
      />

      <Text style={styles.label}>Pass</Text>
      <TextInput
        value= {pass}
        onChangeText={setPass}
        placeholder='********'
        secureTextEntry={true}
        maxLength={8}
        keyboardType='numeric'
        style={styles.input}
      />

      <Text style={styles.label}>Numero</Text>
      <TextInput
        value= {numero}
        onChangeText={setNumero}
        placeholder='20'
        keyboardType='numeric'
        style={styles.input}
      />  

      <Text style={styles.label}>Telefono</Text>
      <TextInput
        value= {telefono}
        onChangeText={setTelefono}
        placeholder='Aqui va tu telefono'
        keyboardType='phone-pad'
        style={styles.input}
      />

      <Text style={styles.label}>Busqueda</Text>
      <TextInput
        value= {busqueda}
        onChangeText={setBusqueda}
        placeholder='Buscar.....'
        returnKeyType='search'
        keyboardType='default'
        style={styles.input}
      />

      <Text style={styles.label}>Precio</Text>
      <TextInput
        value= {decimal}
        onChangeText={setDecimal}
        placeholder='15.5'
        keyboardType='decimal-pad'
        style={styles.input}
      />      

      <Text style={styles.label}>Comentario</Text>
      <TextInput
        value= {comentario}
        onChangeText={setComentario}
        placeholder='Aqui ve tu comentario'
        multiline = {true}
        numberOfLines = {4}
        keyboardType='default'
        style={styles.input}
      />

      <View style={styles.botonesContainer}>
        {/* Corregido 'styles.botonWrapper' por punto '.' */}
        <View style={styles.botonWrapper}>
            <Button title='Guardar nombre' onPress={validarNombre}></Button>
        </View>
        <View style={styles.botonWrapper}>
          <Button title='Validar email' onPress={validarEmail}></Button>
        </View>
      </View >

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(255, 255, 255)',
  },
  centerContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  label: {fontSize: 13, color: '#666', marginTop: 12, textAlign: 'center'},
  title: {fontSize: 22, fontWeight: '600', marginBottom: 20},
  input: {borderWidth: 1, borderColor: '#ddd', borderRadius: 6, padding: 12, width: '100%', maxWidth: 350},
  botonesContainer: {marginTop: 20, gap: 8},
  botonWrapper: {marginBottom: 4}
});