import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Dimensions, TouchableWithoutFeedback, Text } from 'react-native';
 
import Bird from '../components/Bird';
import Obstacles from '../components/Obstacles';
 
 
 


 const Main = (props) => {


    const screenWidth = Dimensions.get("screen").width;
    const screenHeight = Dimensions.get("screen").height;

    const birdLeft = screenWidth / 2;
    const [birdBottom, setBirdBottom] = useState(screenHeight/2);
    const [obstaclesLeft, setObstaclesLeft] = useState(screenWidth) ;
    const [obstaclesLeftTwo, setObstaclesLeftTwo] = useState(screenWidth + screenWidth / 2 + 30);
    const [obstaclesNegHeight, setObstaclesNegHeight] = useState(0) ;
    const [obstaclesNegHeightTwo, setObstaclesNegHeightTwo] = useState(0) ;
    
    const [isGameOver, setIsGameOver] = useState(false); 
    const [score, setScore] = useState(0)

    const obstacleWidth = 60;
    const obstacleHeight = 300;
    const gap = 200;
    const gravity = 3;

    let gameTimerId;
    let obstaclesLeftTimerId;
    let obstaclesLeftTimerIdTwo;
 

    // start bird falling
    useEffect(()=>{
        if(birdBottom > 0) {
          gameTimerId = setInterval(()=>{
                setBirdBottom(birdBottom => birdBottom - gravity)
            },30)
        }
        return () => {
            clearInterval(gameTimerId)
        }
    }, [birdBottom])

    // jump
    const jump = () => {
        if (!isGameOver && (birdBottom < screenHeight)) {
          setBirdBottom(birdBottom => birdBottom + 50)
          console.log('jumped')
        }
      }

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
            setScore(score => score + 1)

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
           setScore(score => score + 1)
       }
   }, [obstaclesLeftTwo]) 


   // check for collisions
   useEffect(() => {
    console.log(obstaclesLeft)
    console.log(screenWidth/2)
    console.log(obstaclesLeft > screenWidth/2)
    if (
      ((birdBottom < (obstaclesNegHeight + obstacleHeight + 30) ||
      birdBottom > (obstaclesNegHeight + obstacleHeight + gap -30)) &&
      (obstaclesLeft > screenWidth/2 -30 && obstaclesLeft < screenWidth/2 + 30 )
      )
      || 
      ((birdBottom < (obstaclesNegHeightTwo + obstacleHeight + 30) ||
      birdBottom > (obstaclesNegHeightTwo + obstacleHeight + gap -30)) &&
      (obstaclesLeftTwo > screenWidth/2 -30 && obstaclesLeftTwo < screenWidth/2 + 30 )
      )
      ) 
      {
      console.log('game over')
      gameOver()
       
     
    }
  })
     
    const gameOver = () => {
        clearInterval(gameTimerId)
        clearInterval(obstaclesLeftTimerId)
        clearInterval(obstaclesLeftTimerIdTwo)
        setIsGameOver(true)
        
    }
  
   
    

    return(
        <TouchableWithoutFeedback onPress={jump}>

            <View style={styles.container}>

                 
                 {isGameOver && 
                    <Text style={{fontSize:90, fontFamily:"ArchitectsDaughter-Regular"}}>
                         Your score: {score}
                     </Text>}
                <Bird 
                    birdBottom = {birdBottom}
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
       </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
     
})


export {Main};