import { StatusBar } from 'expo-status-bar';
import { Dimensions, ImageBackground, StyleSheet, Text, View } from 'react-native';
import background from '../assets/background.jpg';

export default function Background() {
  return (
    <ImageBackground style={styles.background} source={background}></ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
});