import React from 'react' ;
import {createStackNavigator} from '@react-navigation/stack';
import HomeStack from '../navegation/HomeStack';
import AboutStack from '../navegation/AboutStackbout';
import ContactStack from '../navegation/ContactStackContact';
import { createBottomTabNaveigator } from "@react-navigation/bottom-tabs";


const Tab = createBottomTabNaveigator();


export default function Navigation(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="home" component={HomeStack} options={{title: 'Home'}} />
            <Tab.Screen name="about" component={AboutStack} options={{title: 'About'}} />
            <Tab.Screen name="contact" component={ContactStack} options={{title:'Contact'}}/>
        </Tab.Navigator>
    );
}