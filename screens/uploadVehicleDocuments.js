import { View, Text, StatusBar, TouchableHighlight , Image , TextInput, TouchableOpacity ,ScrollView} from 'react-native'
import React, { useEffect, useState ,useContext } from "react";
import styles from '../styles/style'
import { OIContext } from '../context/Context';
import Header from '../components/Header';
import Circle from '../components/Circle';
import Octicons from 'react-native-vector-icons/Octicons'
import i18n from 'i18n-js';
import { useNavigation } from '@react-navigation/native';
import { Question1 } from '../datasets/Question1';
import LinearGradient from 'react-native-linear-gradient';

import { SwipeablePanel } from 'rn-swipeable-panel';

export default function UploadVehicleDocuments() {

    const context = useContext(OIContext)

    const [answer, setAnswer] = useState(1);

    const [doc1, setDoc1] = useState(false);
    const [doc2, setDoc2] = useState(false)
    const [doc3, setDoc3] = useState(false)
    const [doc4, setDoc4] = useState(false)
    const [doc5, setDoc5] = useState(false)

    const navigation = useNavigation();

    const [panelProps1, setPanelProps1] = useState({
      fullWidth: true,
      openLarge: false,
      showCloseButton: true,
      onClose: () => setIsPanelActive1(false),
      onPressCloseButton: () => setIsPanelActive1(false),
      // ...or any prop you want
    });

    const [panelProps2, setPanelProps2] = useState({
      fullWidth: true,
      openLarge: false,
      showCloseButton: true,
      onClose: () => setIsPanelActive2(false),
      onPressCloseButton: () => setIsPanelActive2(false),
      // ...or any prop you want
    });

    const [panelProps3, setPanelProps3] = useState({
      fullWidth: true,
      openLarge: false,
      showCloseButton: true,
      onClose: () => setIsPanelActive3(false),
      onPressCloseButton: () => setIsPanelActive3(false),
      // ...or any prop you want
    });

    const [panelProps4, setPanelProps4] = useState({
      fullWidth: true,
      openLarge: false,
      showCloseButton: true,
      onClose: () => setIsPanelActive4(false),
      onPressCloseButton: () => setIsPanelActive4(false),
      // ...or any prop you want
    });
    
    const [isPanelActive1, setIsPanelActive1] = useState(false);
    const [isPanelActive2, setIsPanelActive2] = useState(false);
    const [isPanelActive3, setIsPanelActive3] = useState(false);
    const [isPanelActive4, setIsPanelActive4] = useState(false);


  return (
    <View style={styles.container}>
        <StatusBar
            animated={true}
            backgroundColor="#fff"
            barStyle={'dark-content'}
            hidden={false} />

        <Header back={true} menu={false} title={''} subTitle={''} headerColor={'transparent'} />
        <View style={{alignItems:'center'}}>
            <Text style={[styles.title,{width:"80%"}]} numberOfLines={2}>{i18n.t('doc2.title')}</Text>
        </View>
        
        <ScrollView>
        <View style={styles.questionView}>
          <Text style={styles.question}>{i18n.t('doc2.subtitle')}</Text>

                <TouchableOpacity onPress={()=>setIsPanelActive1(true)} style={styles.answerView}>
                    <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 0}} colors={doc1?['#ED9939', '#FFCE31']:['rgba(255, 206, 49, 0.09)', 'rgba(255, 206, 49, 0.09)']} style={styles.linearGradiant}>
                        <View style={styles.row}>
                          <Text style={[styles.question,{color:doc1==true?'white':'black'}]}>{i18n.t('doc2.topic1')}</Text> 
                          <Octicons name='check-circle-fill' size={20} color={doc1==true?'white':'#E8E8E8'}/>
                        </View>
                        
                        <Text style={[styles.subtitle,{color:doc1==true?'white':'black',textAlign:'left',paddingHorizontal:0}]}>{i18n.t('doc2.11')}</Text>
                    </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>setIsPanelActive2(true)} style={styles.answerView}>
                    <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 0}} colors={doc2?['#ED9939', '#FFCE31']:['rgba(255, 206, 49, 0.09)', 'rgba(255, 206, 49, 0.09)']} style={styles.linearGradiant}>
                        <View style={styles.row}>
                          <Text style={[styles.question,{color:doc2?'white':'black'}]}>{i18n.t('doc2.topic2')}</Text> 
                          <Octicons name='check-circle-fill' size={20} color={doc2?'white':'#E8E8E8'}/>
                        </View>
                        
                        <Text style={[styles.subtitle,{color:doc2?'white':'black',textAlign:'left',paddingHorizontal:0}]}>{i18n.t('doc2.21')}</Text>
                    </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>setIsPanelActive3(true)} style={styles.answerView}>
                    <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 0}} colors={doc3?['#ED9939', '#FFCE31']:['rgba(255, 206, 49, 0.09)', 'rgba(255, 206, 49, 0.09)']} style={styles.linearGradiant}>
                        <View style={styles.row}>
                          <Text style={[styles.question,{color:doc3?'white':'black'}]}>{i18n.t('doc2.topic3')}</Text> 
                          <Octicons name='check-circle-fill' size={20} color={doc3?'white':'#E8E8E8'}/>
                        </View>
                        
                        <Text style={[styles.subtitle,{color:doc3?'white':'black',textAlign:'left',paddingHorizontal:0}]}>{i18n.t('doc2.31')}</Text>
                    </LinearGradient>
                </TouchableOpacity>



        </View>
        

        <TouchableHighlight style={styles.button} onPress={()=>navigation.navigate('Complete')}>
            <View style={styles.buttonView}>
                <Text style={styles.buttonText}>{i18n.t('doc2.button')}</Text>
            </View>
        </TouchableHighlight>
        </ScrollView>

        <SwipeablePanel {...panelProps1} 
        isActive={isPanelActive1}>
        <View style={styles.panelView}>
        <Text style={styles.subtitle}>{i18n.t('doc2.panelsub1')}</Text>
        <View style={{flexDirection:'row'}}>

        <TouchableOpacity style={styles.photoButton}>
            <Text style={styles.subtitle}>{i18n.t('doc2.topic1')}</Text>
          </TouchableOpacity>

        </View>
        </View>
      </SwipeablePanel>

      <SwipeablePanel {...panelProps2} isActive={isPanelActive2}>
      <View style={styles.panelView}>
        <Text style={styles.subtitle}>{i18n.t('doc2.panelsub2')}</Text>
        <View style={{flexDirection:'row'}}>
          
        <TouchableOpacity style={styles.photoButton}>
            <Text style={styles.subtitle}>{i18n.t('doc2.topic2')}</Text>
          </TouchableOpacity>

        </View>
        </View>
      </SwipeablePanel>

      <SwipeablePanel {...panelProps3} isActive={isPanelActive3}>
      <View style={styles.panelView}>
        <Text style={styles.subtitle}>{i18n.t('doc2.panelsub3')}</Text>
        <View style={{flexDirection:'row'}}>
          
          <TouchableOpacity style={styles.photoButton}>
            <Text style={styles.subtitle}>{i18n.t('doc2.topic3')}</Text>
          </TouchableOpacity>

          
          {/* <TouchableOpacity style={styles.photoButton}>
            <Text style={styles.subtitle}>{i18n.t('doc2.back')}</Text>    
          </TouchableOpacity> */}

        </View>
        </View>
      </SwipeablePanel>

    </View>
  )
}