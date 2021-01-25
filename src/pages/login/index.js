import React, { useContext, useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity  } from 'react-native';
import { MyContext } from '../../config/contexts';
import { useNavigation } from '@react-navigation/native';
import Logo from '../../assets/identidadeVisual.png';



export default function Login(){
    const { data,setData } = useContext(MyContext);
    const [name,setName] = useState('');
    const navigation = useNavigation();

    function handleLogin(){
        if(name == '' ){
          return alert("Preencha o campo com seu nome")
        }
        setData({
            ...data,
            name: name
        })
        navigation.navigate('about');
    }
    return(
        <View style={styles.container}>
            <Image 
                source={Logo} 
                style={styles.image}
            />
            <TextInput
                style={styles.input}
                placeholder="Informe seu nome"
                value={name}
                onChangeText={text => setName(text)}
            />
            <TouchableOpacity style={styles.toucheble} onPress={handleLogin}>
                <Text style={styles.touchebleText} >ENTRAR</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f8f8f8'
        
    },
    image:{
        width:200,
        height:197,
        marginBottom:30
    },
    input:{
        borderWidth: 1,
        width:300,
        height:60,
        borderRadius:15,
        padding:10,
        marginBottom:10,
        borderColor:'#B5B5B5'
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
