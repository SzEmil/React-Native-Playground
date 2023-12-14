import { ImageBackground, StyleSheet } from 'react-native';
import { RegistrationForm } from '../components/RegistrationForm/RegistrationForm';
export const RegistrationScreen = () => {
  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require('../assets/background.jpg')}
    >
      <RegistrationForm />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
