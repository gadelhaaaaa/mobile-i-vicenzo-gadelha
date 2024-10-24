import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// Configurações do Firebase (substitua pelos seus valores)
const firebaseConfig = {
  apiKey: "AIzaSyA_V4V3raKaov6YQJlUQy8hCrwoAXJ8QAg",
  authDomain: "cadastro-78812.firebaseapp.com",
  projectId: "cadastro-78812",
  storageBucket: "cadastro-78812.appspot.com",
  messagingSenderId: "123696211430",
  appId: "1:123696211430:web:a6bef7f08be58329b92227"
};

// Inicialize o Firebase antes de qualquer uso
firebase.initializeApp(firebaseConfig);

const App = () => {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');

  const sendData = async () => {
    const nomesCollection = firebase.firestore().collection('Nomes');
    try {
      await nomesCollection.add({
        Nome: nome,
        Sobrenome: sobrenome
      });
      Alert.alert('Sucesso', 'Dados cadastrados com sucesso!');
      setNome('');
      setSobrenome('');
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Ocorreu um erro ao cadastrar os dados.');
    }
  };
  
  return (
    <View>
      <TextInput
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        placeholder="Sobrenome"        
        value={sobrenome}
        onChangeText={setSobrenome}
      />
      <Button title="Cadastrar" onPress={sendData} />
    </View>
  );
};

export default App;