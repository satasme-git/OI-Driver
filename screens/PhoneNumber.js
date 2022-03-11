import { View, Text, StatusBar, TouchableHighlight,Platform, Image, TextInput ,TouchableOpacity, KeyboardAvoidingView} from 'react-native'
import React, { useEffect, useState ,useContext } from "react";
import styles from '../styles/style'
import { OIContext } from '../context/Context';
import Header from '../components/Header';
import Circle from '../components/Circle';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import { Languages } from '../datasets/Languages';
import Picker from '../components/Picker';
import i18n from 'i18n-js';
import { useNavigation } from '@react-navigation/native';
import OTPInputView from '@twotalltotems/react-native-otp-input'

export default function PhoneNumber() {

    const context = useContext(OIContext)
    const [sent, setSent] = useState(false);
    const [key, setKey] = useState(0);
    const [number, setNumber] = useState();
    const [click, setClick] = useState(false);
    const [country, setCountry] = useState('US');

    
    const [code1, setCode1] = useState();
    const [code2, setCode2] = useState(0);
    const [code3, setCode3] = useState();
    const [code4, setCode4] = useState();
    
    const [otp, setOtp] = useState();

    const [filled, setFilled] = useState(false);

    const navigation = useNavigation();

    const sendCode = ()=>{
        var val = Math.floor(1000 + Math.random() * 9000);
        console.log(val);
        setOtp(val)
    }
    const goToNext = ()=>{
        otp==code1?
        navigation.navigate('SignIn'):
        null
    }

    useEffect(() => {
        sendCode()
      },[]);

  return (
    <View style={styles.container}>
        <StatusBar
            animated={true}
            backgroundColor="#fff"
            barStyle={'dark-content'}
            hidden={false} />

        <Header back={true} menu={false} title={''} subTitle={''} headerColor={'transparent'} />
        <KeyboardAvoidingView behavior={"position"}>
        {
            sent?
            <Animatable.View key={key} animation={sent?'fadeInRight':'fadeOutRight'}>
                <Circle icon={<Image source={require('../images/verify.png')} style={{width:35,height:40,tintColor:'#fff'}} />} />
                <Animatable.Text animation={'fadeInRight'} style={styles.title}>{i18n.t('phone.title2')}</Animatable.Text>
                <Animatable.Text animation={'fadeInRight'} style={styles.subtitle}>{i18n.t('phone.subtitle')} {<Text onPress={()=>{setSent(false);setKey(key+1)}} style={{color:'#4987F7'}}>{i18n.t('phone.subtitle2')}</Text>}  </Animatable.Text>
                    {/* <View style={{flexDirection:'row',justifyContent:'center',paddingVertical:20}}>
                        <TextInput
                            style={styles.codeinput}
                            onChangeText={(text)=>setCode1(text)}
                            value={code1}
                            keyboardType="numeric"  
                            maxLength={1}                         
                        />
                        <TextInput
                            style={styles.codeinput}
                            onChangeText={(text)=>setCode2(text)}
                            value={code2}
                            keyboardType="numeric"   
                            maxLength={1}                        
                        />
                        <TextInput
                            style={styles.codeinput}
                            onChangeText={(text)=>setCode3(text)}
                            value={code3}
                            keyboardType="numeric" 
                            maxLength={1}                          
                        />
                        <TextInput
                            style={styles.codeinput}
                            onChangeText={(text)=>setCode4(text)}
                            value={code4}
                            keyboardType="numeric" 
                            maxLength={1}                       
                        />
                    </View> */}
                    <View style={{alignItems:'center',marginVertical:10}}>
                     <OTPInputView
                        style={{width: '60%', height: 50}}
                        pinCount={4}
                        code={code1} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                        onCodeChanged = {code => { {setCode1(code),setCode2(code)}}}
                        autoFocusOnLoad
                        codeInputFieldStyle={styles.underlineStyleBase}
                        codeInputHighlightStyle={styles.underlineStyleHighLighted}
                        onCodeFilled = {(code => {
                            console.log(`Code is ${code}, you are good to go!`)
                            setFilled(true)
                        })}
                    />   
                    </View>
                    <Animatable.Text animation={'fadeInRight'} onPress={()=>{setSent(false);setKey(key+1)}} style={[styles.subtitle,{color:'#4987F7'}]}>{i18n.t('phone.change')}  </Animatable.Text>

                        {
                            code2.toString().length>3?
                            <TouchableHighlight style={styles.button} onPress={()=>{goToNext();setKey(1)}}>
                    <View style={styles.buttonView}>
                        <Text style={styles.buttonText}>{i18n.t('phone.button2')}</Text>
                        {/* <FontAwesome5 name='arrow-right' size={12} color={'white'} style={{paddingLeft:10}}/> */}
                    </View>
                </TouchableHighlight>
                :
                <TouchableHighlight style={[styles.button,{backgroundColor:'rgba(0,0,0,0.3)'}]}>
                    <View style={styles.buttonView}>
                        <Text style={styles.buttonText}>{i18n.t('phone.button2')}</Text>
                        {/* <FontAwesome5 name='arrow-right' size={12} color={'white'} style={{paddingLeft:10}}/> */}
                    </View>
                </TouchableHighlight>
                        }
                

            </Animatable.View>
            :
            <Animatable.View key={key} style={{paddingTop:70}} animation={sent==false?'fadeInRight':'fadeOutRight'}>
                <Text style={styles.title}>{i18n.t('phone.title1')}</Text>

                <View style={styles.inputView}>
                    <View style={styles.phoneCountry}>
                        
                        {
                                Languages.map((lang)=>
                                country==lang.title?
                                    <Image key={lang.id} source={lang.image} style={{width:22,height:22,borderRadius:25}}  />
                                :
                                null
                                )
                            }
                        
                        {
                            click?
                            <TouchableOpacity onPress={()=>setClick(false)}>
                               <FontAwesome name='angle-up' size={25} color={'black'} style={{paddingLeft:10}}/> 
                            </TouchableOpacity>
                            :
                            <TouchableOpacity onPress={()=>setClick(true)}>
                                <FontAwesome name='angle-down' size={25} color={'black'} style={{paddingLeft:10}}/> 
                            </TouchableOpacity>
                            
                        }
                        <View style={{borderColor:'gray',borderRightWidth:1,height:30,width:10}} />

                        {/* <Picker data={Languages} avatar={true} click={click} onPress={()=>{setCountry(lang.title);setClick(false)}} state={country} /> */}
                        
                        <Animatable.View duration={100} animation={click?'fadeIn':'fadeOut'} style={{backgroundColor:'white',padding:10,position:'absolute',top:40,zIndex:2,elevation:20}}>
                            {
                                Languages.map((lang)=>
                                    <TouchableOpacity key={lang.id} onPress={()=>{setCountry(lang.title);setClick(false)}} style={{margin:5}}>
                                        <View style={{flexDirection:'row',alignItems:'center'}}>
                                            <Image source={country==lang.title?lang.image:lang.dimage} style={{width:22,height:22,borderRadius:25}}  />
                                            <Text style={{marginLeft:10,color:country==lang.title?'black':'#C4C4C4'}}>{lang.title}</Text>
                                        </View>
                                    </TouchableOpacity>
                                )
                            }
                        </Animatable.View>
                        
                    </View>
                    
                    <TextInput
                        style={styles.input}
                        onChangeText={(text)=>setNumber(text)}
                        value={number}
                        placeholder="xx xxx xxxx"
                        keyboardType="numeric"
                       
                    />
                </View>

                <TouchableHighlight style={[styles.button,{marginTop:30}]} onPress={()=>{setSent(true);setKey(0)}}>
                    <View style={styles.buttonView}>
                        <Text style={styles.buttonText}>{i18n.t('phone.button1')}</Text>
                        <FontAwesome5 name='arrow-right' size={12} color={'white'} style={{paddingLeft:10}}/>
                    </View>
                </TouchableHighlight>

            </Animatable.View>
        }
        

        </KeyboardAvoidingView>
    </View>
  )
}