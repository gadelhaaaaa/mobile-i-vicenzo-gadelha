import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';

const sites = [
  { id: '1', name: 'Google', description: 'O mecanismo de busca mais popular do mundo.', url: 'https://www.google.com' },
  { id: '2', name: 'Facebook', description: 'A maior rede social do mundo.', url: 'https://www.facebook.com' },
  { id: '3', name: 'X', description: 'Uma plataforma de microblogging popular.', url: 'https://www.x.com' },
  { id: '4', name: 'LinkedIn', description: 'Rede social voltada para profissionais.', url: 'https://www.linkedin.com' },
  { id: '5', name: 'Instagram', description: 'Plataforma de compartilhamento de fotos e vídeos.', url: 'https://www.instagram.com' },
];

const TabContent = ({ title, data }) => (
  <View style={styles.tabContent}>
    <Text style={styles.tabTitle}>{}</Text>
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.siteItem} onPress={() => {}}>
          <Text style={styles.siteName}>{item.name}</Text>
          <Text style={styles.siteDescription}>{item.description}</Text>
          <Text style={styles.siteUrl}>{item.url}</Text>
        </TouchableOpacity>
      )}
    />
  </View>
);

export default function SitesScreen() {
  const [activeTab, setActiveTab] = useState('Sites');

  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <Image
          source={{ uri: 'https://www.freepnglogos.com/uploads/google-logo-png/file-google-logo-svg-wikimedia-commons-23.png' }}
          style={styles.googleLogo}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Pesquisar"
        />
      </View>

      <View style={styles.tabs}>
        <TouchableOpacity style={styles.tab} onPress={() => setActiveTab('Sites')}>
          <Text style={styles.tabText}>Sites</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab} onPress={() => setActiveTab('Imagens')}>
          <Text style={styles.tabText}>Imagens</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab} onPress={() => setActiveTab('Notícias')}>
          <Text style={styles.tabText}>Notícias</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab} onPress={() => setActiveTab('Vídeos')}>
          <Text style={styles.tabText}>Vídeos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab} onPress={() => setActiveTab('Outros')}>
          <Text style={styles.tabText}>Outros</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        {activeTab === 'Sites' && <TabContent title="Sites" data={sites} />}
        {activeTab === 'Imagens' && <TabContent title="Imagens" data={[]} />}
        {activeTab === 'Notícias' && <TabContent title="Notícias" data={[]} />}
        {activeTab === 'Vídeos' && <TabContent title="Vídeos" data={[]} />}
        {activeTab === 'Outros' && <TabContent title="Outros" data={[]} />}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    backgroundColor: '#F1F1F1',
  },
  googleLogo: {
    width: 92,
    height: 30,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF',
  },
  tabs: {
    flexDirection: 'row',
    backgroundColor: '#F1F1F1',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    fontSize: 16,
    color: '#1A0DAB',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  tabContent: {
    flex: 1,
  },
  siteItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    marginBottom: 16,
  },
  siteName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1A0DAB',
    marginBottom: 4,
  },
  siteDescription: {
    fontSize: 16,
    color: '#4D5156',
    marginBottom: 4,
  },
  siteUrl: {
    fontSize: 14,
    color: '#006621',
  },
  tabTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
