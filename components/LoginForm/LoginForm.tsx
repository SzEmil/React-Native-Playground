import {
  View,
  StyleSheet,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Pressable,
} from 'react-native';
import { useState } from 'react';
import { Avatar } from '../Avatar/Avatar';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleRegister = () => {
    console.log(email, password);
  };
  return (
    <View style={styles.card}>
      <Avatar/>
      <Text style={styles.title}>Sign in</Text>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          secureTextEntry
          onChangeText={setPassword}
        />
        <Pressable onPress={handleRegister} style={styles.button}>
          <Text style={styles.buttonText}>Registration</Text>
        </Pressable>
        <Pressable>
          <Text style={styles.text}>Already have an account? Sign in</Text>
        </Pressable>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    paddingLeft: 16,
    paddingRight: 16,
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '500',
    paddingTop: 92,
    paddingBottom: 33,
  },
  input: {
    width: '100%',
    borderRadius: 5,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    marginBottom: 16,
    fontSize: 16,
    fontWeight: '400',
    backgroundColor: 'rgba(235, 235, 235, 0.8)',
    color: 'black',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '400',
    color: 'white',
  },
  button: {
    borderRadius: 100,
    backgroundColor: '#FF6C00',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    elevation: 3,
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    color: 'black',
    textAlign: 'center',
    marginBottom: 45,
  },
});
