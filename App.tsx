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
import { RegistrationScreen } from './Screens/RegistrationScreen';

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
        {/* <StatusBar backgroundColor="green" /> */}
        <RegistrationScreen />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
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
