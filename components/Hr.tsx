import { StyleSheet, View } from 'react-native';

export default function Hr(style: any = {}) {
  return (
    <View style={[styles.hr, style]}></View>
  );
}

const styles = StyleSheet.create({
  hr: {
    height: 2,
    width: '80%',
    backgroundColor: '#000',
    marginTop: 20,
    marginBottom: 20,
    opacity: 0.5,
    borderRadius: 10
  }
});