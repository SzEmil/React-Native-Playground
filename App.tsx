import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Keyboard,
} from 'react-native';
import { TextCard } from './components/TextCard/TextCard';
import { useFonts } from 'expo-font';
import { CoursesList } from './components/CoursesList/CoursesList';
import { Button, TextInput } from 'react-native';
import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';

export default function App() {
  const [text, setText] = useState('');

  const [fontsLoaded] = useFonts({
    'Agbalumo-Regular': require('./assets/Agbalumo-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground source={{ uri: 'https://picsum.photos/200' }}>
          <TextCard>ELO EELOOO!!!</TextCard>
        </ImageBackground>
        <Image
          source={{ uri: 'https://picsum.photos/200' }}
          style={{ width: 200, height: 200 }}
        />
        <CoursesList />
        <KeyboardAvoidingView
          behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        >
          <TextInput
            style={styles.input}
            placeholder="Input some text"
            value={text}
            onChangeText={setText}
          />
          <Button title="Click me" onPress={() => console.log(text)}></Button>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 30,
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
});
