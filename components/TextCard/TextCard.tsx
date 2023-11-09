import { Text, View } from 'react-native';
import { styles } from './TextCard.styles';

export const TextCard = ({ children }: {children: React.ReactNode}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};
