import React from 'react' ;
import {View, Text, Button} from ' react-native ' ;

export default function Home(props){
    const {navegation} = props;
    return(
        <View>
            <Text> Estamos en Home </Text>

            <Button title='Ir a about' onPress={() => navegation.navegate('about')}/>
        </View>
    );
}
    