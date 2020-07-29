import React,{useState,useEffect} from 'react';
import {View,TextInput,Text,StyleSheet,Button} from "react-native"
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';


const tableHead=["Name","Email","Password"];


const Form = () => {
    const [input,setInput]=useState({
        name:"",
        email:"",
        password:""
    });
    const tableData=[["taha","taha","123"],["ali","ali","ali123"],["name","email","password"]];
    const {name,email,password}=input;

    const addUser=()=>{
        let liste=["name","email","password"];
    };

    return (
        <View style={styles.main}>
            <View style={styles.table}>
                <Table  borderStyle={{borderWidth:1}}>
                    <Row data={tableHead} flexArr={[1,1,1]} style={{height: 40}} textStyle={styles.text}/>
                    <TableWrapper style={{flexDirection: "row"}}>
                        <Rows data={tableData} flexArr={[1,1,1]} style={{height: 28}} textStyle={{textAlign:"center"}}/>
                    </TableWrapper>
                </Table>
            </View>
            <View style={styles.container}>
                <Text style={styles.text}>User Form</Text>
                <TextInput style={styles.input} value={name}  onChangeText={text=>setInput({name:text})}/>
                <TextInput style={styles.input} value={email}  onChangeText={a=>setInput({email:a})}/>
                <TextInput style={styles.input} value={password}  onChangeText={b=>setInput({password:b})}/>
            </View>
            <Button onPress={addUser} title="Press Me"/>
        </View>

    );
};

const styles=StyleSheet.create({
    main:{
        flexDirection: "column",
        justifyContent: "center",
        flex:1
    },
    table:{
        padding: 16,
        paddingTop: 30,
        backgroundColor: '#fff'
    },
    container:{
        flexDirection:"column",
        justifyContent:"center",
        alignItems: "center",
    },
    text:{
        fontSize:25
    },
    input:{
        backgroundColor: "#444",
        width:"85%",
        color:"#fff",
        borderRadius:12,
        padding:0,
        paddingLeft:40,
        paddingHorizontal:15,
        height:40,
        alignItems:"center",
        marginLeft:20,
        marginTop:25,
        fontSize: 18
    },
});

export default Form;
