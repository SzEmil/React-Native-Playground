import { ImageBackground, StyleSheet } from 'react-native';
import { LoginForm } from '../components/LoginForm/LoginForm';

export const LoginScreen = () => {
  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require('../assets/background.jpg')}
    >
      <LoginForm />
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
