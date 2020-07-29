import React from 'react';
import {StyleSheet,View,Text,TouchableOpacity,Image} from "react-native"



const BottomView = () => {
    return (
        <View style={styles.view3}>
            <View style={styles.firstPart}>
                <Image source={require("../image/face1.png")} style={styles.faceImage} />
                <Text style={styles.faceText}>Login with Facebook</Text>
            </View>
            <View style={styles.secondPart}>
                <Text style={{color:"#787878",fontSize:18}}>New to Netflix?</Text>
                <TouchableOpacity>
                    <Text style={{color:"#F9F9F9",fontSize:18,fontWeight:"bold"}}>  Sing up now.</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles=StyleSheet.create({
    view3:{
        flex:1,
        alignItems:"flex-start",
        paddingLeft: "7%",
        justifyContent: "center"
    },
    firstPart:{
        flexDirection:"row",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    faceImage:{
        width:23,
        height:23
    },
    faceText:{
        color:"#787878",
        marginLeft:10
    },
    secondPart:{
      flexDirection: "row",
      justifyContent:"flex-start",
      alignItems:"center",
      marginTop:30,
    },
});

export default BottomView;
