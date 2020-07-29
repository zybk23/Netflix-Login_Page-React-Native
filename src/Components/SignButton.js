import React from 'react';
import {TouchableOpacity,Text,StyleSheet,Dimensions} from "react-native"


const {width,height}=Dimensions.get("window");

const SignButton = () => {
    return (
        <TouchableOpacity
            style={styles.button}
        >
            <Text style={styles.singText}>Sign In</Text>
        </TouchableOpacity>
    );
};

const styles=StyleSheet.create({
    button:{
        width: width * 0.88,
        height: height * 0.06,
        borderRadius: 7,
        backgroundColor:"red",
        justifyContent:"center",
        alignItems:"center",
        marginTop:25
    },
    singText:{
        fontSize:20,
        color:"#F9F9F9",
        fontWeight:"bold"
    },
});

export default SignButton;
