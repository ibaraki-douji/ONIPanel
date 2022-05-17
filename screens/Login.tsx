import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Background from '../components/Background';
import Button from '../components/Button';
import Input from '../components/Input';
import Styles from '../constants/Styles';
import { Props } from '../utils/Props';

export default function Login({ navigation }: Props<'Login'>) {
  return (
    <View style={Styles.root}>
        <Background></Background>
        <View style={[Styles.container, styles.titleView]}><Text style={{color: "#fff", fontSize: 40}}>Login</Text></View>
        
        <View style={[Styles.container]}>
          <Input style={styles.inputs} placeholder='Email'></Input>
          <Input style={styles.inputs} placeholder='Password' password={true}></Input>
        </View>
        
        <View style={[Styles.container, styles.button]}>
          <Button text='Login'></Button>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleView: {
    marginTop: Dimensions.get('window').height/4,
    top: 0
  },
  button: {
    marginTop: Dimensions.get('window').height/1.1,
    top: 0
  },
  inputs: {
    marginTop: 15,
    marginBottom: 15,
  }
});