import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MenuScreen from './screens/MenuScreen';

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <MenuScreen />
        <StatusBar style="auto" />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(255, 255, 255)',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  }
});