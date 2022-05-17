import { Dimensions, StyleSheet, Text, TextStyle, TouchableOpacity } from "react-native";

export default function Button(options: {text: string, onClick?: () => any, style?: StyleSheet.NamedStyles<TextStyle> | any}) {

    return (<TouchableOpacity style={[styles.button, options.style]} onPress={(e) => {if (options.onClick) options.onClick()}}><Text style={styles.buttonText}>{options.text}</Text></TouchableOpacity>)

}

const styles = StyleSheet.create({
    button: {
      backgroundColor: '#333',
      borderRadius: 5,
      borderColor: '#000',
      borderStyle: 'solid',
      borderWidth: 2,
      width: (Dimensions.get('window').width > Dimensions.get('window').height) ? Dimensions.get('window').width/2 : Dimensions.get('window').width/1.5,
      padding: 10,
			flex: 1,
			alignItems: 'center',
			justifyContent: 'center',
    },
		buttonText: {
			color: '#eee',
		}
  });