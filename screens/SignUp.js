import { View, Text, StatusBar, TouchableHighlight , Image , TextInput} from 'react-native'
import React, { useEffect, useState ,useContext } from "react";
import styles from '../styles/style'
import { OIContext } from '../context/Context';
import Header from '../components/Header';
import Circle from '../components/Circle';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native';

import i18n from 'i18n-js';

export default function SignUp() {

    const context = useContext(OIContext)
    const [fname, setFname] = useState();
    const [lname, setLname] = useState();
    const [email, setEmail] = useState();
    const [check, setCheck] = useState(false);
    
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <StatusBar
            animated={true}
            backgroundColor="#fff"
            barStyle={'dark-content'}
            hidden={false} />

        <Header back={true} menu={false} title={''} subTitle={''} headerColor={'transparent'} />
        <Text style={styles.title}>{i18n.t('signUp.title')}</Text>
        <Circle icon={<Image source={require('../images/signup.png')} style={{width:40,height:40,tintColor:'#fff'}} />} />
        
        <View style={styles.inputView}>
            <TextInput
                style={styles.input}
                onChangeText={(text)=>setFname(text)}
                value={fname}
                placeholder={i18n.t('signUp.placeholder1')}
                keyboardType="default"
                
            />
        </View>

        <View style={styles.inputView}>
            <TextInput
                style={styles.input}
                onChangeText={(text)=>setLname(text)}
                value={lname}
                placeholder={i18n.t('signUp.placeholder2')}
                keyboardType="default"
                
            />
        </View>

        <View style={styles.inputView}>
            <TextInput
                style={styles.input}
                onChangeText={(text)=>setEmail(text)}
                value={email}
                placeholder={i18n.t('signUp.placeholder3')}
                keyboardType="email-address"
                
            />
        </View>
        <View style={{paddingHorizontal:15,paddingTop:10,flexDirection:'row'}}>
            {
                check?
                <MaterialIcons name='check-box' size={17} color={'black'} onPress={()=>setCheck(false)}/>
                :
                <MaterialIcons name='check-box-outline-blank' size={17} color={'black'} onPress={()=>setCheck(true)}/>
            }
            
            <Text style={styles.terms}>{i18n.t('signUp.check')}{<Text>{i18n.t('signUp.term')}</Text>} {<Text>{i18n.t('signUp.and')}</Text>} {<Text>{i18n.t('signUp.condition')}</Text>} {<Text>{i18n.t('signUp.rest')}</Text>}</Text>
        </View>


        <TouchableHighlight style={styles.button} onPress={()=>navigation.navigate('VehicalReg1')}>
            <View style={styles.buttonView}>
                <Text style={styles.buttonText}>{i18n.t('signUp.button')}</Text>
            </View>
        </TouchableHighlight>
        <Text style={styles.subtitle}>{i18n.t('signUp.subtitle')} {<Text style={{color:'#4987F7'}} onPress={()=>navigation.navigate('SignIn')} >{i18n.t('signUp.subtitle2')}</Text>} </Text>
    </View>
  )
}