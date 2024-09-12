import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons, MaterialIcons, Entypo } from '@expo/vector-icons'; 
import { BaseButton, RawButton } from 'react-native-gesture-handler';
import { BounceOutRight } from 'react-native-reanimated';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Button
          title="Fazer login"
          onPress={() => router.push('/LoginScreen')}
          color="#4285F4" 
          style={styles.loginButton}
        />
      </View>
      <Image source={require('../assets/images/google-letrinha.png')} style={styles.logo} />
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Pesquisar"
          placeholderTextColor="#9AA0A6"
        />
        <TouchableOpacity style={styles.icon}>
          <Ionicons name="search" size={24} color="#5F6368" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <MaterialIcons name="mic" size={24} color="#5F6368" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <Entypo name="camera" size={24} color="#5F6368" />
        </TouchableOpacity>
      </View>
      
      <View style={styles.trendingSection}>
        <Text style={styles.trendingTitle}>Pesquisas em alta</Text>
        <View style={styles.trendingItem}>
          <Text style={styles.trendingText}>Setembro amarelo</Text>
        </View>
        <View style={styles.trendingItem}>
          <Text style={styles.trendingText}>cancer terminal isabel veloso</Text>
        </View>
        <View style={styles.trendingItem}>
          <Text style={styles.trendingText}>cotaçao dolar hoje</Text>
        </View>
        <View style={styles.trendingItem}>
          <Text style={styles.trendingText}>governo horario de verao</Text>
        </View>
        <View style={styles.trendingItem}>
          <Text style={styles.trendingText}>hugo motta camara</Text>
        </View>
        <View style={styles.trendingItem}>
          <Text style={styles.trendingText}>maria de fatima vale tudo remake</Text>
        </View>
        <View style={styles.trendingItem}>
          <Text style={styles.trendingText}>Corinthians ira jogar a serie b de 2025</Text>
        </View>
        <View style={styles.trendingItem}>
          <Text style={styles.trendingText}>Palmeiras ou Real Madrid, qual clube é maior?</Text>
        </View>
        <View style={styles.trendingItem}>
          <Text style={styles.trendingText}>Neo Quimica Lixao foi xingada pelo Lebron James</Text>
        </View>
        <View style={styles.trendingItem}>
          <Text style={styles.trendingText}>Divida do Corinthians casa do Trilhao</Text>
        </View>
        <View style={styles.trendingItem}>
          <Text style={styles.trendingText}>Batman ira jogar a serie b pelo timao?</Text>
        </View>
        <View style={styles.trendingItem}>
          <Text style={styles.trendingText}>Leo picon tem um picon?</Text>
        </View>
        <View style={styles.trendingItem}>
          <Text style={styles.trendingText}>Calleri rebolando no vestiario</Text>
        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingVertical: 16,
  },
  loginButton: {
    margin: 1,
    padding: 3,
    borderRadius: 5,
  },
  logo: {
    width: 350,
    height: 200,
    alignSelf: 'center',
    marginBottom: 2,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 24,
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  searchInput: {
    flex: 1,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 16,
  },
  icon: {
    padding: 5,
  },
  trendingSection: {
    marginTop: 16,
  },
  trendingTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#202124',
    marginBottom: 12,
  },
  trendingItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  trendingText: {
    fontSize: 16,
    color: '#202124',
  },
});
