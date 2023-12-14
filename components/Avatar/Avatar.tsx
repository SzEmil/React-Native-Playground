import { View } from 'react-native';
import { StyleSheet, ImageBackground, Pressable, Text } from 'react-native';
import { USER_IMAGE_PLACEHOLDER } from '../../constants/data';

type AvatarProps = {
  image?: string;
};

export const Avatar = ({ image = USER_IMAGE_PLACEHOLDER }: AvatarProps) => {
  const handleChangeAvatar = () => {
    console.log(image);
  };
  return (
    <View style={styles.box}>
      <ImageBackground source={{ uri: image }} style={styles.backgroundImage}>
        <Pressable style={styles.button} onPress={handleChangeAvatar}>
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    position: 'absolute',
    alignSelf: 'center',
    top: -60,
    flexDirection: 'row',
  },
  backgroundImage: {
    width: 120,
    height: 120,
    backgroundColor: 'rgba(235, 235, 235, 1)',
    position: 'relative',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonBox: {
    position: 'relative',
  },
  button: {
    alignSelf: 'center',
    padding: 0,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    width: 25,
    height: 25,
  },
  buttonText: {
    position: 'absolute',

    color: '#FF6C00',
    fontSize: 40,
    fontWeight: '200',
    alignSelf: 'center',
  },
});
