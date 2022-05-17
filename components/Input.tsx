import { Dimensions, StyleSheet, TextInput, TextStyle } from "react-native";

export default function Input(options: {placeholder: string, password?: boolean, onChange?: (text: string) => any, style?: StyleSheet.NamedStyles<TextStyle> | any}) {

    return (<TextInput placeholder={options.placeholder} secureTextEntry={options.password} style={[styles.input, options.style]} onChange={(e) => {if (options.onChange) options.onChange(e.nativeEvent.text)}} placeholderTextColor='#888'></TextInput>)

}

const styles = StyleSheet.create({
    input: {
      backgroundColor: '#333',
      borderRadius: 5,
      borderColor: '#000',
      borderStyle: 'solid',
      borderWidth: 2,
      width: (Dimensions.get('window').width > Dimensions.get('window').height) ? Dimensions.get('window').width/2 : Dimensions.get('window').width/1.5,
      padding: 10,
      color: '#eee',
    }
  });