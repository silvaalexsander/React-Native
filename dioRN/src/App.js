import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Pressable,
  Linking,
} from 'react-native';

const git = '#010409';
const perfil = 'https://github.com/silvaalexsander/';
const imgP =
  'https://avatars.githubusercontent.com/u/54286509?s=400&u=bbff230d63097c76f61b0d7f6306965d2c9864fd&v=4';

const App = () => {
  const head = async () => {
    const response = await Linking.canOpenURL(perfil);
    console.log('Verificando');
    if (response) {
      Linking.openURL(perfil);
      console.log('Abrindo');
      console.log('Abrindo LInk');
    }
  };
  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={git} barStyle="light-content" />
      <View style={style.content}>
        <Image style={style.avatar} source={{uri: imgP}} />
        <Text
          accessibilityLabel="Nome: Alexsander da Silva"
          style={[style.defaultText, style.name]}>
          Alexsander da Silva
        </Text>
        <Text
          accessibilityLabel="Nick: silvaalexsander"
          style={[style.defaultText, style.nick]}>
          silvaalexsander
        </Text>
        <Text
          accessibilityLabel="Descrição: Estudante de Engenharia de Computação na FUMEC"
          style={[style.defaultText, style.description]}>
          Estudante de Engenharia de Computação na FUMEC
        </Text>
        <Pressable onPress={head}>
          <View style={[style.button]}>
            <Text style={[style.defaultText, style.textButton]}>
              Open in GitHub
            </Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    backgroundColor: git,
    flex: 1, //Expandir a cor para tela toda
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 1,
  },
  defaultText: {
    color: 'white',
  },
  name: {
    marginTop: 20,
    fontSize: 23,
    fontWeight: 'bold',
  },
  nick: {
    fontSize: 18,
    color: '#4F565E',
  },
  description: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#C9D1D9',
  },
  button: {
    backgroundColor: '#4F565E',
    borderRadius: 10,
    padding: 20,
    marginTop: 70,
  },
  textButton: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
