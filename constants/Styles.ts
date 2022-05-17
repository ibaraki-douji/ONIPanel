import { Dimensions, Platform, StatusBar, StyleSheet } from "react-native";

export default StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: "#db8607",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: (Platform.OS == "android" ? StatusBar.currentHeight : 0) || 0
    },
    container: {
        position: 'absolute',
        alignItems: "flex-start",
        justifyContent: "flex-start",
    }
});