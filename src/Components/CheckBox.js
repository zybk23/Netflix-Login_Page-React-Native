import React from 'react';
import {StyleSheet,View,TouchableOpacity,Text} from "react-native"


const CheckBox = ({RememberMe,isClicked}) => {
    return (
        <TouchableOpacity
            style={styles.check}>
            <TouchableOpacity
                onPress={RememberMe}
                style={styles.touchable}>
                {
                    isClicked && <View
                        style={styles.checkView}
                    />
                }
            </TouchableOpacity>
        </TouchableOpacity>
    );
};

const styles=StyleSheet.create({
    check:{
        flexDirection:"row",
        alignItems:"center"
    },
    touchable:{
        width:20,
        height:20,
        borderWidth:1,
        backgroundColor:"#828282",
        borderColor:"gray",
        marginRight:5,
        alignItems: "center",
        justifyContent:"center",
        borderRadius:3
    },
    checkView:{
        width: 15,
        height: 15,
        backgroundColor: "white",
        borderRadius: 2
    },
});

export default CheckBox;
