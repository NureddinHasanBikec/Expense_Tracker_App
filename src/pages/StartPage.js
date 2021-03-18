import React from 'react';
import {Image, StyleSheet,Dimensions, TouchableOpacity, View, Text} from 'react-native';
import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';


 

const StartPage = (props) => {
    return(
        <View style={styles.container}>
           <View style={{flex: 1}}>
                <Image
                    source={require('../assets/start.png')}
                    style={styles.image}
                />
            </View>
            <TouchableOpacity 
                style={styles.button}
                activeOpacity={0.6}
                onPress={()=> props.navigation.navigate("Main")}    
            >
                <Text style={styles.text}>Let's Go !</Text>
            </TouchableOpacity>
        </View>
    );
};

export {StartPage};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#88e7dd',
        alignItems: 'center',
        justifyContent: 'center',
    },
     image: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height * 0.55 
     },
     button: {
          
         alignSelf: 'flex-end',
         margin: 30,
         padding: 40,
         borderRadius: 180,
         backgroundColor: '#8e24aa',
         
     },
     text: {
         fontSize: 80,
         transform: [{ rotate: '340deg'}],
         fontFamily: 'ArchitectsDaughter-Regular'
     }
})
