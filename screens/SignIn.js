import { View, Text, StatusBar, TouchableHighlight , Image , TextInput} from 'react-native'
import React, { useEffect, useState ,useContext } from "react";
import styles from '../styles/style'
import { OIContext } from '../context/Context';
import Header from '../components/Header';
import Circle from '../components/Circle';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import i18n from 'i18n-js';
import { useNavigation } from '@react-navigation/native';

export default function SignIn() {

    const context = useContext(OIContext)
    const [number, setNumber] = useState();
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <StatusBar
            animated={true}
            backgroundColor="#fff"
            barStyle={'dark-content'}
            hidden={false} />

        <Header back={true} menu={false} title={''} subTitle={''} headerColor={'transparent'} />
        <Text style={styles.title}>{i18n.t('signIn.title')}</Text>
        <Circle icon={<SimpleLineIcons name='screen-smartphone' size={40} color={'white'}/>} />
        
        <View style={styles.inputView}>
            <TextInput
                style={styles.input}
                onChangeText={(text)=>setNumber(text)}
                value={number}
                placeholder={i18n.t('signIn.placeholder')}
                keyboardType="numeric"
                
            />
        </View>
        <TouchableHighlight style={styles.button}>
            <View style={styles.buttonView}>
                <Text style={styles.buttonText}>{i18n.t('signIn.button')}</Text>
            </View>
        </TouchableHighlight>
        <Text style={styles.subtitle}>{i18n.t('signIn.subtitle')} {<Text style={{color:'#4987F7'}} onPress={()=>navigation.navigate('SignUp')} >{i18n.t('signIn.subtitle2')}</Text>} </Text>
    </View>
  )
}