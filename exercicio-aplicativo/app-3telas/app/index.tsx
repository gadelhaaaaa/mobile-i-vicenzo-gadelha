import React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

// Tela Home (principal)
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Tela Home</Text>
      {/* O nome da tela aqui deve corresponder ao nome do Stack.Screen */}
      <Button title="Ir para Explorar" onPress={() => navigation.navigate('Explorar')} />
    </View>
  );
}

// Tela Explorar
function ExploreScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Tela Explorar</Text>
      <Button title="Ir para Inscrições" onPress={() => navigation.navigate('Inscrições')} />
    </View>
  );
}

// Tela Inscrições
function SubscriptionsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Tela Inscrições</Text>
      <Button title="Voltar para Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      {/* Verifique se os nomes das telas estão corretos */}
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Explorar" component={ExploreScreen} />
        <Stack.Screen name="Inscrições" component={SubscriptionsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
