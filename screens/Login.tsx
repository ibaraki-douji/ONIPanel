import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import background from '../assets/background.jpg';
import Background from '../components/Background';
import Styles from '../constants/Styles';

export default function Login() {
  return (
    <View style={Styles.root}>
        <Background></Background>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});