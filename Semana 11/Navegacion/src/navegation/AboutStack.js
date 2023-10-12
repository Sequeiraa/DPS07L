import React from ' react' ;
import {createStackNavigator} from '@react-navigation/stack' ;
import Home from '../screens/About';

const Stack= createStackNavigator();

export default function AboutStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="home"component={About} options={{headerShown:false}}/>
        </Stack.Navigator>
        
        );
}