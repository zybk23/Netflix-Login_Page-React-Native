import React from 'react';
import {View,Text,StyleSheet} from "react-native"
import CheckBox from './CheckBox';

const Info = ({RememberMe,isClicked}) => {
    return (
        <View style={styles.container}>
            <View style={styles.leftSide}>
               <CheckBox
                   RememberMe={RememberMe}
                   isClicked={isClicked}
               />
               <Text style={styles.remember}>Remember me</Text>
            </View>
            <Text style={styles.need}>
                Need help?
            </Text>
        </View>
    );
};

const styles=StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:15,
        width:"95%"
    },
    leftSide:{
      flexDirection: "row",
      alignItems: "center"
    },
    remember:{
        color:"#828282",
        fontWeight:"bold"
    },
    need:{
        color:"#828282",
        fontWeight:"bold"
    }
});

export default Info;
