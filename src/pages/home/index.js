import React, {useContext, useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import Icon from 'react-native-vector-icons/Feather';
import IconEntypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import  { MyContext }  from '../../config/contexts';

Icon.loadFont();
IconEntypo.loadFont();

export default function Home(){
    const { data,setData } = useContext(MyContext);
    const [isActive,setIsActive] = useState(false);
    const [per,SetPer] = useState(100);
    const navigation = useNavigation();
     

    function Start(){
        setIsActive(!isActive); // Inverte de false para true
    }

  
    function Reset(){
        setData({
            ...data,
            defaultTime: 25
        })
        SetPer(100);
        setIsActive(false);
    }


    useEffect(()=>{
        let interval = null;
        let t = data.defaultTime;
        
        if(isActive){
            interval = setInterval(()=>{
                  t = t-1;
                    setData({
                        ...data,
                        defaultTime: t
                    })

                var percent = t*100;
                SetPer(percent/25)
                
                if(t < 0){
                    clearInterval(interval)
                    Reset();
                    return navigation.navigate('break');
                }
            },1000)
        }else if(!isActive){
            clearInterval(interval);
        }
        
            return () => clearInterval(interval);
        
    },[isActive]);
    
    return(
        <View style={styles.container}>
            <View style={styles.containerTemp}>
                <Text style={styles.title}>POMODORO</Text>
                    <ProgressCircle
                        percent={per}
                        radius={90}
                        borderWidth={4}
                        color="#C53534"
                        shadowColor="#f8f8f8"
                        bgColor="#2F374A"
                        marginRight={2}
                    >
                        <Text style={{ fontSize: 44, textAlign:'center', color:'#fff' }}>
                            {data.defaultTime}s{'\n'}
                           <Text style={{ fontSize:18, color:'#fff'}}>WORK</Text> 
                        </Text>
                    </ProgressCircle>
            </View>
            <View style={styles.containerButtons}>
                <TouchableOpacity style={styles.toucheblePause} onPress={Reset}>
                    <Text style={styles.touchebleTextReset} >
                        <IconEntypo name="back-in-time" size={28}/>
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchebleStart} onPress={Start}>
                    <Text style={styles.touchebleText}>
                        {isActive ? 
                        <Icon name="pause-circle" size={28}/>
                            : 
                        <Icon name="play-circle" size={28}/>
                        }
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#2F374A'
    },
    containerButtons:{
        flexDirection:'row',
        justifyContent:'center',
    },
    containerTemp:{
        marginBottom:20
    },
    title:{
        color:'#f8f8f8',
        fontSize:24,
        fontWeight:'bold',
        textAlign:'center',
        marginBottom:44
    },
    touchebleStart:{
        justifyContent:'center',
        alignItems:'center',

        width:150,
        height:60,
        backgroundColor:'#C53534',
        borderRadius:15,
        marginTop:20
    },
    toucheblePause:{
        justifyContent:'center',
        alignItems:'center',

        width:150,
        height:60,
        backgroundColor:'#f8f8f8',
        borderRadius:15,
        marginTop:20,
        marginRight:4
    },
    touchebleText:{
        fontWeight:'bold',
        color:'#fff'
    },
    touchebleTextReset:{
        fontWeight:'bold',
        color:'#C53534'
    }


});
