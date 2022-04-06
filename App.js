import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import AppLoading from 'expo-app-loading';
import Home from './screens/Home';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';

export default function App() {

  const [loaded] = useFonts({
    Heebo: require('./assets/fonts/Heebo-Regular.ttf'),
    HeeboBold: require('./assets/fonts/Heebo-Bold.ttf'),
  })

  if (!loaded) {
    return <AppLoading />
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
