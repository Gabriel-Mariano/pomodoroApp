import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import  { MyContext }  from '../../config/contexts';
import { useNavigation } from '@react-navigation/native';
import Logo from '../../assets/logo.png';

function About(){
    const { data } = useContext(MyContext);
    const navigation = useNavigation();

    function handleContinue(){
        navigation.navigate('home');
    }

    return(
        <View style={styles.container}>
            <Image 
                source={Logo} 
                style={styles.image}
            />
            <View style={styles.containerText}>
                <Text style={styles.span}>
                    Olá <Text style={styles.strong}>{data.name}</Text>, seja bem-vindo!{"\n\n"}
                    A Técnica <Text style={styles.strong}>Pomodoro</Text> é um método de gerenciamento de tempo desenvolvido por Francesco Cirillo no final dos anos 1980. {"\n\n"}A técnica consiste na utilização de um cronômetro para dividir o trabalho em períodos de 25 minutos, separados por breves intervalos.
                </Text>  
            </View>
            <TouchableOpacity style={styles.toucheble} onPress={handleContinue}>
                    <Text style={styles.touchebleText} >CONTINUE</Text>
                </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#2F374A',
    },
    image:{
        width:100,
        height:105,
        marginBottom:30
    },
    containerText:{
        marginTop:30,
        marginLeft:20,
        marginRight:20,
        marginBottom:60
    },
    span:{
        textAlign:'center',
        fontSize:20,
        color:"#f8f8f8"
    },
    strong:{
        fontWeight:'bold'
    },
    toucheble:{
        justifyContent:'center',
        alignItems:'center',

        width:300,
        height:60,
        backgroundColor:'#C53534',
        borderRadius:15,
    },
    touchebleText:{
        fontWeight:'bold',
        color:'#fff'
    }
});

export default About;
