import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Titulo from './.expo/src/components/title/title';

export default function App() {
  return (
    <View style={styles.container}>
      <Titulo />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#12E08E',
    paddingTop: 50,
    borderRadius: 30,
  },
});
