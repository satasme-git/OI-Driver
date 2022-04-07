import { View, Text, StatusBar, TouchableHighlight , Image , TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView} from 'react-native'
import React, { useEffect, useState ,useContext } from "react";
import styles from '../styles/style'
import { OIContext } from '../context/Context';
import Header from '../components/Header';
import Circle from '../components/Circle';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';

import i18n from 'i18n-js';

import { firebase } from '@react-native-firebase/database';
import database from '@react-native-firebase/database';
import firestore from '@react-native-firebase/firestore';

import AsyncStorage from '@react-native-async-storage/async-storage';

// const reference = firebase
//   .app()
//   .database('https://oi-app-2af0a-default-rtdb.asia-southeast1.firebasedatabase.app/')
//   .ref('/users/123');

export default function SignUp() {

    const context = useContext(OIContext)
    const [fname, setFname] = useState();
    const [lname, setLname] = useState();
    const [email, setEmail] = useState();
    const [check, setCheck] = useState(false);
    const [dob, setDob] = useState(i18n.t('signUp.placeholder4'));

    
    const [date, setDate] = useState(new Date(moment().subtract(18, 'years')))
    const [open, setOpen] = useState(false)
    
    const navigation = useNavigation();

    const changeDOB = () =>{
        setOpen(true)
        // setDob(moment(date).format("MMM Do YYYY"))
    }

    const changeId = async (value) => {
        try {
          await AsyncStorage.setItem('id', value.toString())
        } catch (e) {
          // saving error
        }
        context.setId(value)
      }

      const getId = async () => {
        try {
          const value = await AsyncStorage.getItem('id')
          if(value !== null) {
            context.setId(value)
            // value previously stored
          }
        } catch(e) {
          // error reading value
        }
      }
    const writeUserData =  (fname,lname,email,dob)=>{
        getId()
        var id = parseInt(context.id)+1
        changeId(id)
        if(fname == null || lname == null || email == null || dob == i18n.t('signUp.placeholder4')){
            console.log('error')
        }
        
        else {
        // console.log(fname)
        // firebase
        // .app()
        // .database('https://oi-app-2af0a-default-rtdb.asia-southeast1.firebasedatabase.app/')
        // // database()
        // .ref('/users')
        // .push({
        //   first_name: fname,
        //   last_name: lname,
        //   email: email,
        //   dob: dob,
        // })
        // .then(snapshot => {
        //     console.log('User data: ', id);
        //     getData()
        //   });

        // firestore()
        // .collection('users')
        // .add({
        //     name: 'Ada Lovelace',
        //     age: 30,
        // })
        // .then(() => {
        //     console.log('User added!');
        // });

        // await database().ref('users').remove();

        firestore()
        .collection('users')
        .add({
            first_name: fname,
            last_name: lname,
            email: email,
            dob : dob
        })
        .then(() => {
            console.log('User added!');
        });
        
        const usersCollection = firestore()
            .collection('users')
            .get()
            .then(collectionSnapshot => {
                console.log('Total users: ', collectionSnapshot.size);
                collectionSnapshot
                    .forEach(documentSnapshot => {
                        console.log('User ID: ', documentSnapshot.id,
                            documentSnapshot.data());
                    });
            });



        // const users = await firestore().collection('users').get();

        // console.log(users)

    }
    }

    const getData = () =>{
        firebase
        .app()
        .database('https://oi-app-2af0a-default-rtdb.asia-southeast1.firebasedatabase.app/')
        .ref('/users/')
        .on('value', snapshot => {
            console.log('User data: ', snapshot.val());
        });
    }

    const [itemsArray, setItemsArray] = React.useState([]);

    useEffect(() => {
    //     firebase
    //     .app()
    //     .database('https://oi-app-2af0a-default-rtdb.asia-southeast1.firebasedatabase.app/')
    //     .ref('/users/')
    //   .on('value', snapshot => {
    //     let data = snapshot.val();
    //     const items = Object.values(data);
    //     setItemsArray(data);
    //     console.log(snapshot.val())
    //   });
    //   console.log(itemsArray)

    }, []);


  return (
    <View style={styles.container}>
        <StatusBar
            animated={true}
            backgroundColor="#fff"
            barStyle={'dark-content'}
            hidden={false} />

        <Header back={true} menu={false} title={''} subTitle={''} headerColor={'transparent'} />
        <ScrollView>
        <KeyboardAvoidingView behavior={"position"}>
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

        <View style={styles.inputView}>
            <TouchableOpacity onPress={()=>changeDOB()}>
                <Text style={[styles.input,{textAlignVertical:'center'}]}>{dob}</Text>
            </TouchableOpacity>
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

        <DatePicker
            modal
            open={open}
            date={date}
            mode={'date'}
            title={i18n.t('signUp.modalTitle')}
            confirmText={i18n.t('signUp.confirm')}
            cancelText={i18n.t('signUp.cancel')}
            maximumDate={new Date(moment().subtract(18, 'years'))}
            onConfirm={(date) => {
            setOpen(false)
            setDate(date)
            setDob(moment(date).format("MMM Do YYYY"))
            }}
            onCancel={() => {
            setOpen(false)
            setDob(moment(new Date()).format("MMM Do YYYY"))
            setDate(new Date(moment().subtract(18, 'years')))
            }}
        />


        <TouchableHighlight style={styles.button} 
        // onPress={()=>navigation.navigate('VehicalReg1')}
        onPress={()=>writeUserData(fname,lname,email,dob)}
        
        >
            <View style={styles.buttonView}>
                <Text style={styles.buttonText}>{i18n.t('signUp.button')}</Text>
            </View>
        </TouchableHighlight>
        <Text style={styles.subtitle}>{i18n.t('signUp.subtitle')} {<Text style={{color:'#4987F7'}} onPress={()=>navigation.navigate('SignIn')} >{i18n.t('signUp.subtitle2')}</Text>} </Text>
        </KeyboardAvoidingView>
        </ScrollView>
    </View>
  )
}