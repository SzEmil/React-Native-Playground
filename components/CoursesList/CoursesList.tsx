import {  FlatList, Text } from 'react-native';
import { COURSES } from '../../mocks/data';

export const CoursesList = () => {
  return (
      <FlatList
        data={COURSES}
        renderItem={({ item }) => <Text>{item.title}</Text>}
        keyExtractor={item => item.id}
      />
  );
};
