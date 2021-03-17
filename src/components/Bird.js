import React from 'react';
import {View, StyleSheet} from 'react-native';

const Bird = ({birdButtom, birdLeft}) => {

    const birdWidth = 50;
    const birdHeight = 60;

    return(
        <View style={{
            position: 'absolute',
            backgroundColor: 'blue',
            width: birdWidth,
            height: birdHeight,
            bottom: birdButtom - (birdHeight / 2),
            left: birdLeft - (birdWidth / 2),
        }}/>
    )
}

export default Bird;    

 