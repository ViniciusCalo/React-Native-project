import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Button } from 'react-native';
import Shrek from './components/Shrek';
import Burro from './components/Burro';
import { useState } from 'react';
export default function App() {
  const [nome1, setNome1] = useState("Qual o meu nome?");
  const [nome2, setNome2] = useState("Qual o meu nome?");
  const [nome3, setNome3] = useState("Qual o meu nome?");
  let img1 = 'https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/04/04/1596394453-shrekfierce.jpg';
  let img2 = 'https://i.pinimg.com/564x/14/3b/b5/143bb54804da15cc3a12b9a5be4d48b9.jpg';
  let img3 = 'https://www.omelete.com.br/imagens/cinema/news/shrek/gato.jpg';
  const handleMudar1 = () => {
    setNome1("Sou o Shrek");
  }
  const handleMudar2 = () => {
    setNome2("Sou o Burro!");
  }
  const handleMudar3 = () => {
    setNome3("Sou o Gato de botas!");
  }
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.container}>

        {/* /* shrek view */}
        <Text style={{
          color: '#FF0000', fontSize: 25, margin: 15
        }}>Personagem 1</Text>
        <Shrek img={img1} largura={450} altura={400} fulano="Shrek" borda={15} />
        <Text style={{ fontSize: 30 }}> {nome1} </Text>
        <Button title="Clique aqui" onPress={handleMudar1} />
        <StatusBar style="auto" />

        {/** Burro view */}

        <Text style={{
          color: '#0000FF', fontSize: 25, margin: 30
        }}>Personagem 2</Text>
        <Burro img={img2} largura={450} altura={400} fulano="Burro" borda={15}></Burro>
        <Text style={{ fontSize: 30 }}> {nome2} </Text>
        <Button title="Clique aqui" onPress={handleMudar2} />
        <StatusBar style="auto" />

        {/** Gato de botas view */}

        <Text style={{
          color: '#228B22', fontSize: 25, margin: 30
        }}>Personagem 3</Text>
        <Burro img={img3} largura={550} altura={500} fulano="Gato de Botas" borda={15}></Burro>
        <Text style={{ fontSize: 30 }}> {nome3} </Text>
        <Button title="Clique aqui" onPress={handleMudar3} />
        <StatusBar style="auto" />

      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF0F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});