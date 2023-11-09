import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { TextCard } from './components/TextCard/TextCard';
import { useFonts } from 'expo-font';
import { CoursesList } from './components/CoursesList/CoursesList';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Agbalumo-Regular': require('./assets/Agbalumo-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={{ uri: 'https://picsum.photos/200' }}>
        <TextCard>ELO ELOOO!!</TextCard>
      </ImageBackground>
      <Image
        source={{ uri: 'https://picsum.photos/200' }}
        style={{ width: 200, height: 200 }}
      />
      <CoursesList />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
