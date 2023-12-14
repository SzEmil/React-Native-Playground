import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  View,
  Keyboard,
} from 'react-native';
import { useFonts } from 'expo-font';
import {
  TouchableWithoutFeedback,
} from 'react-native';
import { RegistrationScreen } from './Screens/RegistrationScreen';
import { LoginScreen } from './Screens/LoginScreen';

export default function App() {

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
        {/* <RegistrationScreen /> */}
        <LoginScreen />
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
