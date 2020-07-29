import React,{Component} from 'react';
import {View,Image,Text,SafeAreaView,StyleSheet} from "react-native"
import Input from './Components/Input';
import SignButton from './Components/SignButton';
import Info from './Components/Info';
import BottomView from './Components/BottomView';


class Main extends Component {
    state={
        email:"",
        password:"",
        isClicked:false
    };

    RememberMe=()=>{
        this.setState({
            email:"tahazeybek",
            password:"taha123"
        })
    };

    render() {
        const{email,password,isClicked}=this.state;
        return (
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.view1}>
                    <Image style={{width:250,height:100,tintColor:"#CC090F"}}
                           source={require("./image/net1.png")}/>
                </View>
                <View style={styles.view2}>
                    <Text style={styles.signText}>Sign In</Text>
                    <Input
                        value={email}
                        onChangeText={(email)=>this.setState({email})}
                        placeHolder={"Email or phone number"}
                    />
                    <Input
                        secureTextEntry
                        value={password}
                        onChangeText={(password)=>this.setState({password})}
                        placeHolder={"Password"}
                    />
                    <SignButton/>
                    <Info
                        RememberMe={()=>{this.RememberMe(); this.setState({isClicked: !isClicked})} }
                        isClicked={isClicked}
                    />
                </View>
                <BottomView/>
            </SafeAreaView>
        );
    }
}

const styles=StyleSheet.create({
    safeArea:{
        flex:1,
        backgroundColor:"#000000"
    },
    view1:{
        flex:1,
        justifyContent:"center",
        alignItems:"flex-start",
        paddingLeft: "3%"
    },
    view2:{
        flex:2,
        flexDirection:"column",
        alignItems: "flex-start",
        paddingLeft:"7%"
    },
    signText:{
        fontSize:40,
        color:"#F9F9F9",
        marginBottom:25,
        fontWeight:"bold"
    },

});

export default Main;
