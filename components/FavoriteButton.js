import {Button, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function FavoriteButton({pressHandler}){

    return(
        <Pressable onPress={pressHandler}>
            <Ionicons name= 'star' size= '22' color={'green'}/>
        </Pressable>

    ) 
}


export default FavoriteButton;