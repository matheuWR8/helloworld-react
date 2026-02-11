import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Touchable, TouchableOpacity, Alert } from 'react-native';

export default function App() {
  const [nome, setNome] = useState("");

  function exibeTexto() {
    Alert.alert(nome);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>HELLO WORLDoooo!!</Text>

      <Text style={styles.lblNome}>
        Digite seu nome
      </Text>

      <TextInput
        keyboardType='default'
        style={styles.caixaTexto}
        onChangeText={setNome}
        //onChangeText={(texto) => setNome(texto)}
      >

      </TextInput>

      <TouchableOpacity style={styles.botao}
        onPress={() => exibeTexto()}  
      >
        <Text>CLICA</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 25,
    color: '#ff0000ff',
    fontWeight: 'bold'
  },
  lblNome: {
    marginTop: 40,
    fontSize: 25,
    color: "#aaf",
    borderBottomColor: "#ffa",
    borderBottomWidth: 4,
  },
  caixaTexto: {
    fontSize: 20,
    width: "90%",
    borderWidth: 2,
    borderColor: "#000",
    marginTop: 20,
    borderRadius: 15,
    textAlign: 'center',
  },
  botao: {
    width: "80%",
    height: 50,
    backgroundColor: "#00f",
    borderRadius: 20,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
