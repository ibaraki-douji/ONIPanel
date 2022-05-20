import { Dimensions, Platform, StatusBar, StyleSheet, Text, View , Image} from 'react-native';
import Styles from '../constants/Styles';
import Array from './Array';
import Hr from './Hr';
import home from '../assets/home.png';


export default function Menu() {

  const arr = [
    {
      name: "Home",
      icon: home
    },
    {
      name: "Home",
      icon: home
    },
    {
      name: "Home",
      icon: home
    },
    {
      name: "Home",
      icon: home
    },
    
  ]


  return (
    <>
      <View style={[Styles.container, styles.shadow]}>

      </View>
      <View style={[Styles.container, styles.menu]}>
        <Text style={styles.title}>ONIPanel</Text>
        <Hr/>
        <Array data={arr} xml={(e) => (<View style={{flex: 0.5, flexDirection: 'row', margin: 0}}><Text style={{width: "75%"}}>{e.name}</Text><Image source={e.icon} width={1} style={{width: 40, height: 40}}></Image></View>)}></Array>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  menu: {
    top: 0,
    left: 0,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width - 100,
    marginTop: (Platform.OS == "android" ? StatusBar.currentHeight : 0) || 0,
    backgroundColor: '#666',
    borderRadius: 10,
    marginLeft: -10,
    paddingLeft: 10,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  shadow: {
    top: 0,
    right: 0,
    height: Dimensions.get('window').height,
    width: 150,
    marginTop: (Platform.OS == "android" ? StatusBar.currentHeight : 0) || 0,
    backgroundColor: '#000',
    opacity: 0.2
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 20
  }
});