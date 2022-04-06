import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import AppLoading from 'expo-app-loading';
import Home from './screens/Home';
import { useFonts } from 'expo-font';

export default function App() {

  const [loaded] = useFonts({
    Heebo: require('./assets/fonts/Heebo-Regular.ttf'),
    HeeboBold: require('./assets/fonts/Heebo-Bold.ttf'),
    Courgette: require('./assets/fonts/Courgette-Regular.ttf'),
  })

  if (!loaded) {
    return <AppLoading />
  }

  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
});
