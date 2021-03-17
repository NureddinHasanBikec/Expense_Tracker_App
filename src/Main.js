import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

import Bird from './components/Bird';



export default function Main () {


    const screenWidth = Dimensions.get("screen").width;
    const screenHeight = Dimensions.get("screen").height;

    const birdLeft = screenWidth / 2;
    const [birdButtom, setBirdButtom] = useState(screenHeight/2);

    const gravity = 3;

    // start bird falling
    useEffect(()=>{
        if(birdButtom > 0) {
            setInterval(()=>{
                setBirdButtom(birdButtom => birdButtom - gravity)
            },30)
        }
    })



    return(
        <View style={styles.container}>
            
            <Bird />
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})