import React from 'react';
import {TextInput, StyleSheet, Dimensions} from 'react-native';


const {width,height}=Dimensions.get("window");

const Input = ({placeHolder,value,onChangeText,secureTextEntry}) => {

    return (
        <TextInput
            secureTextEntry={secureTextEntry}
            placeholder={placeHolder}
            placeholderTextColor={"#787878"}
            onChangeText={(data) => onChangeText(data)}
            style={[styles.input]}
            value={value}
        />
    );
};

const styles=StyleSheet.create({
    input:{
        width: width * 0.88,
        height: height * 0.06,
        backgroundColor: '#333333',
        borderRadius: 7,
        paddingLeft: 10,
        marginBottom: height * 0.02,
        fontSize: 16,
        color:"#fff"
    }
});


export default Input;
