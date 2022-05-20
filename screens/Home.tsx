import { Dimensions, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native';
import Background from '../components/Background';
import Button from '../components/Button';
import Input from '../components/Input';
import Menu from '../components/Menu';
import Styles from '../constants/Styles';
import { Props } from '../utils/Props';

export default function Home({ navigation }: Props<'Home'>) {
  return (
    <View style={Styles.root}>
        <Background></Background>
        

        <Menu></Menu>
    </View>
  );
}

const styles = StyleSheet.create({
  
});