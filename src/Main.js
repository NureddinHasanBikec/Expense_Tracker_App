import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

import Bird from './components/Bird';
import Obstacles from './components/Obstacles';



export default function Main () {


    const screenWidth = Dimensions.get("screen").width;
    const screenHeight = Dimensions.get("screen").height;

    const birdLeft = screenWidth / 2;
    const [birdButtom, setBirdButtom] = useState(screenHeight/2);
    const [obstaclesLeft, setObstaclesLeft] = useState(screenWidth) ;
    const [obstaclesLeftTwo, setObstaclesLeftTwo] = useState(screenWidth + screenWidth / 2 + 30);
    const [obstaclesNegHeight, setObstaclesNegHeight] = useState(0) 
    const [obstaclesNegHeightTwo, setObstaclesNegHeightTwo] = useState(0) 


    const obstacleWidth = 60;
    const obstacleHeight = 300;
    const gap = 200;
    const gravity = 3;

    let gameTimerId;
    let obstaclesLeftTimerId;
    let obstaclesLeftTimerIdTwo;

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
            return () => {
                clearInterval(obstaclesLeftTimerId)
            }
        } else {
            setObstaclesLeft(screenWidth)
            setObstaclesNegHeight( - Math.random() * 100 )
        }
    }, [obstaclesLeft]) 

   // second obstacle 
       useEffect(()=>{
       if(obstaclesLeftTwo > - obstacleWidth) {
           obstaclesLeftTimerIdTwo = setInterval(()=>{
               setObstaclesLeftTwo(obstaclesLeftTwo => obstaclesLeftTwo - 5)
           }, 30)
       return () => {
               clearInterval(obstaclesLeftTimerIdTwo)
           }
       } else {
           setObstaclesLeftTwo(screenWidth)
           obstaclesNegHeightTwo( - Math.random() * 100)
       }
   }, [obstaclesLeftTwo]) 


    return(
        <View style={styles.container}>
            
            <Bird 
                birdButtom = {birdButtom}
                birdLeft = {birdLeft}
            />
            <Obstacles
                randomBottom = {obstaclesNegHeight}
                color = {'green'}
                obstaclesLeft = {obstaclesLeft}
                obstacleWidth = {obstacleWidth}
                obstacleHeight = {obstacleHeight}
                gap = {gap}
                
            />
             <Obstacles
                randomBottom={obstaclesNegHeightTwo}
                color={'yellow'}
                obstaclesLeft = {obstaclesLeftTwo}
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