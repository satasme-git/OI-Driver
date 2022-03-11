import { View, Text, StatusBar, TouchableHighlight } from 'react-native'
import React, { useEffect, useState ,useContext } from "react";
import styles from '../styles/style'
import { OIContext } from '../context/Context';
import Header from '../components/Header';

export default function Home() {

    const context = useContext(OIContext)

  return (
    <View style={styles.container}>
        <StatusBar
            animated={true}
            backgroundColor="#fff"
            barStyle={'dark-content'}
            hidden={false} />

        <Header back={true} menu={true} title={''} subTitle={''} headerColor={'transparent'} />
      
        <Text style={styles.title}>{context.state}</Text>

        <TouchableHighlight style={styles.button}>
            <View style={styles.buttonView}>
                <Text style={styles.buttonText}>Text</Text>
            </View>
        </TouchableHighlight>
    </View>
  )
}