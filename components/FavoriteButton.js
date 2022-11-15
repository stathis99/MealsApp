import {Button, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function FavoriteButton({pressHandler, name }){

    return(
        <Pressable onPress={pressHandler}>
            <Ionicons name= {name} size= '22' color={'blue'}/>
        </Pressable>

    ) 
}


export default FavoriteButton;