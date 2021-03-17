import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

import Bird from './components/Bird';
import Obstacles from './components/Obstacles';



export default function Main () {


    const screenWidth = Dimensions.get("screen").width;
    const screenHeight = Dimensions.get("screen").height;

    const birdLeft = screenWidth / 2;
    const [birdButtom, setBirdButtom] = useState(screenHeight/2);
    const [obstaclesLeft, setObstaclesLeft] = useState(screenWidth) 

    const obstacleWidth = 60;
    const obstacleHeight = 300;
    const gap = 50;
    const gravity = 3;

    let gameTimerId;
    let obstaclesLeftTimerId;

    // start bird falling
    useEffect(()=>{
        if(birdButtom > 0) {
          gameTimerId = setInterval(()=>{
                setBirdButtom(birdButtom => birdButtom - gravity)
            },30)
        }
        return () => {
            clearInterval(gameTimerId)
        }
    }, [birdButtom])


    // first obstacle 
    useEffect(()=>{
        if(obstaclesLeft > - obstacleWidth) {
            obstaclesLeftTimerId = setInterval(()=>{
                setObstaclesLeft(obstaclesLeft => obstaclesLeft - 5)
            }, 30)
        }

        return () => {
            clearInterval(obstaclesLeftTimerId)
        }

    }, [obstaclesLeft]) 

    return(
        <View style={styles.container}>
            
            <Bird 
                birdButtom = {birdButtom}
                birdLeft = {birdLeft}
            />
            <Obstacles
                obstaclesLeft = {obstaclesLeft}
                obstacleWidth = {obstacleWidth}
                obstacleHeight = {obstacleHeight}
                gap = {gap}
            />
            
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