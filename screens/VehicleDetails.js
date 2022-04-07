import { View, Text, StatusBar, TouchableHighlight , Image , Dimensions , TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView} from 'react-native'
import React, { useEffect, useState ,useContext } from "react";
import styles from '../styles/style'
import { OIContext } from '../context/Context';
import Header from '../components/Header';
import Circle from '../components/Circle';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { useNavigation } from '@react-navigation/native';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import i18n from 'i18n-js';

export default function VehicleDetails() {

    const context = useContext(OIContext)
    const [lno, setLNo] = useState();
    const [madein, setMadeIn] = useState(i18n.t('details.placeholder4'));
    const [make, setmake] = useState();
    const [model, setModel] = useState();
    // const [dob, setDob] = useState(i18n.t('signUp.placeholder4'));

    
    const [date, setDate] = useState(new Date())
    const [date2, setDate2] = useState(new Date())
    const [date3, setDate3] = useState(new Date())

    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [open3, setOpen3] = useState(false)
    
    const navigation = useNavigation();

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
            <Text style={styles.title}>{i18n.t('details.q1')}</Text>
            <Text style={[styles.question,{marginTop:20}]}>{i18n.t('details.title')}</Text>
            <View style={[styles.inputView,{marginHorizontal:0}]}>
            <TextInput
                style={styles.input}
                onChangeText={(text)=>setLNo(text)}
                value={lno}
                placeholder={i18n.t('details.placeholder1')}
                keyboardType="default"
                
            />
        </View>

        <View style={[styles.inputView,{marginHorizontal:0}]}>
            <TextInput
                style={styles.input}
                onChangeText={(text)=>setmake(text)}
                value={make}
                placeholder={i18n.t('details.placeholder2')}
                keyboardType="default"
                
            />
        </View>

        <View style={[styles.inputView,{marginHorizontal:0}]}>
            <TextInput
                style={styles.input}
                onChangeText={(text)=>setModel(text)}
                value={model}
                placeholder={i18n.t('details.placeholder3')}
                keyboardType="default"
                
            />
        </View>

        <View style={[styles.inputView,{marginHorizontal:0}]}>
            <TouchableOpacity onPress={()=>setOpen(true)} style={[styles.row,{width:windowWidth-50}]}>
                <Text style={[styles.input,{textAlignVertical:'center'}]}>{madein}</Text>
                <EvilIcons name={'calendar'} size={25}  color={'#94A3B8'}/>
            </TouchableOpacity>
        </View>
        {/* 
        
        





        
        <Text style={[styles.question,{marginTop:20}]}>{i18n.t('driving.q2')}</Text>
        
        <View style={[styles.inputView,{marginHorizontal:0}]}>
            <TouchableOpacity onPress={()=>setOpen2(true)} style={[styles.row,{width:windowWidth-50}]}>
                <Text style={[styles.input,{textAlignVertical:'center'}]}>{rLicenseExp}</Text>
                <EvilIcons name={'calendar'} size={25}  color={'#94A3B8'}/>
            </TouchableOpacity>
        </View>

        
        <Text style={[styles.question,{marginTop:20}]}>{i18n.t('driving.q3')} </Text>
        
        <View style={[styles.inputView,{marginHorizontal:0}]}>
            <TouchableOpacity onPress={()=>setOpen3(true)} style={[styles.row,{width:windowWidth-50}]}>
                <Text style={[styles.input,{textAlignVertical:'center'}]}>{rInsuranceExp}</Text>
                <EvilIcons name={'calendar'} size={25}  color={'#94A3B8'}/>
            </TouchableOpacity>
        </View> */}




        <DatePicker
            modal
            open={open}
            date={date}
            mode={'date'}
            title={i18n.t('driving.modalTitle')}
            confirmText={i18n.t('driving.confirm')}
            cancelText={i18n.t('driving.cancel')}
            minimumDate={new Date(moment().subtract(18, 'years'))}
            onConfirm={(date) => {
            setOpen(false)
            setDate(date)
            setMadeIn(moment(date).format("MMM Do YYYY"))
            }}
            onCancel={() => {
            setOpen(false)
            setMadeIn(moment(new Date()).format("MMM Do YYYY"))
            setDate(new Date())
            }}
        />



        <TouchableHighlight style={styles.button} onPress={()=>navigation.navigate('UploadDocuments')}>
            <View style={styles.buttonView}>
                <Text style={styles.buttonText}>{i18n.t('details.button')}</Text>
            </View>
        </TouchableHighlight>
        </KeyboardAvoidingView>
        </ScrollView>
    </View>
  )
}