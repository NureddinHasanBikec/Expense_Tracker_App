import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
 
import {FinishPage, StartPage, Main} from './pages';
 
 

const Stack = createStackNavigator();

function Router() {
 

  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{headerShown: false}}
        initialRouteName={"StartPage"}
      >  
              <Stack.Screen name='StartPage' component={StartPage} />
              <Stack.Screen name='Main' component={Main} />
              
         
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
