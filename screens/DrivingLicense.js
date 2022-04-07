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

export default function DrivingLicense() {

    const context = useContext(OIContext)
    const [lno, setLNo] = useState();
    const [dLicenseExp, setDLicenseExp] = useState(i18n.t('driving.placeholder2'));
    const [rLicenseExp, setRLicenseExp] = useState(i18n.t('driving.placeholder2'));
    const [rInsuranceExp, setRInsuranceExp] = useState(i18n.t('driving.placeholder2'));
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
        <Text style={styles.title}>{i18n.t('driving.title')}</Text>
        
        <Text style={[styles.question,{marginTop:20}]}>{i18n.t('driving.q1')}</Text>

        <View style={[styles.inputView,{marginHorizontal:0}]}>
            <TextInput
                style={styles.input}
                onChangeText={(text)=>setLNo(text)}
                value={lno}
                placeholder={i18n.t('driving.placeholder1')}
                keyboardType="default"
                
            />
        </View>

        <View style={[styles.inputView,{marginHorizontal:0}]}>
            <TouchableOpacity onPress={()=>setOpen(true)} style={[styles.row,{width:windowWidth-50}]}>
                <Text style={[styles.input,{textAlignVertical:'center'}]}>{dLicenseExp}</Text>
                <EvilIcons name={'calendar'} size={25}  color={'#94A3B8'}/>
            </TouchableOpacity>
        </View>

        
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
        </View>




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
            setDLicenseExp(moment(date).format("MMM Do YYYY"))
            }}
            onCancel={() => {
            setOpen(false)
            setDLicenseExp(moment(new Date()).format("MMM Do YYYY"))
            setDate(new Date(moment().subtract(18, 'years')))
            }}
        />

        <DatePicker
            modal
            open={open2}
            date={date2}
            mode={'date'}
            title={i18n.t('driving.modalTitle2')}
            confirmText={i18n.t('driving.confirm')}
            cancelText={i18n.t('driving.cancel')}
            minimumDate={new Date(moment().subtract(18, 'years'))}
            onConfirm={(date) => {
            setOpen2(false)
            setDate2(date)
            setRLicenseExp(moment(date).format("MMM Do YYYY"))
            }}
            onCancel={() => {
            setOpen2(false)
            setRLicenseExp(moment(new Date()).format("MMM Do YYYY"))
            setDate2(new Date(moment().subtract(18, 'years')))
            }}
        />

        <DatePicker
            modal
            open={open3}
            date={date3}
            mode={'date'}
            title={i18n.t('driving.modalTitle3')}
            confirmText={i18n.t('driving.confirm')}
            cancelText={i18n.t('driving.cancel')}
            minimumDate={new Date(moment().subtract(18, 'years'))}
            onConfirm={(date) => {
            setOpen3(false)
            setDate3(date)
            setRInsuranceExp(moment(date).format("MMM Do YYYY"))
            }}
            onCancel={() => {
            setOpen3(false)
            setRInsuranceExp(moment(new Date()).format("MMM Do YYYY"))
            setDate3(new Date(moment().subtract(18, 'years')))
            }}
        />



        <TouchableHighlight style={styles.button} onPress={()=>navigation.navigate('VehicleDetails')}>
            <View style={styles.buttonView}>
                <Text style={styles.buttonText}>{i18n.t('driving.button')}</Text>
            </View>
        </TouchableHighlight>
        </KeyboardAvoidingView>
        </ScrollView>
    </View>
  )
}