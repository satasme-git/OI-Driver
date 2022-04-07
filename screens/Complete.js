import { View, Text,StatusBar,Image,TouchableHighlight } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import styles from '../styles/style';
import WhiteCircle from '../components/WhiteCircle';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import i18n from 'i18n-js';

export default function Complete() {
  return (
    <View>
        <StatusBar barStyle='dark-content' backgroundColor={'#FFCE31'} />
        <LinearGradient start={{x: 1, y: 1}} end={{x: 0, y: 0}} colors={['#ED9939', '#FFCE31']} style={styles.linearGradiantFlex}>
        <WhiteCircle icon={<FontAwesome name='check' size={55} color={'#FDDF97'}/> } />
        <Text style={[styles.title,{marginVertical:15}]}>{i18n.t('complete.title')}</Text>
        <Text style={[styles.subtitle,{color:'#000'}]}>{i18n.t('complete.subtitle')}</Text>
        <TouchableHighlight style={[styles.button,{marginTop:30}]} onPress={()=>{}}>
                    <View style={styles.buttonView}>
                        <Text style={styles.buttonText}>{i18n.t('complete.button')}</Text>
                    </View>
                </TouchableHighlight>           
        </LinearGradient>
    </View>
  )
}