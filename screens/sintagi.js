import { Text, Button, View , StyleSheet, Image, Pressable, FlatList, ScrollView} from "react-native";
import { useLayoutEffect } from 'react';
import FavoriteButton from "../components/FavoriteButton";
import { FavoritesContext } from "../store/context/favoreites-context";
import { useContext } from "react";



function Sintagi({ route, navigation }){
    const item = route.params.item

    const FavoriteMealsCtx = useContext(FavoritesContext);

    const IsFavorite = FavoriteMealsCtx.ids.includes(item.item.id);

    function onPressFavoriteHandler(){

        if(IsFavorite){
            FavoriteMealsCtx.removeFavorite(item.item.id);
        }else{
            FavoriteMealsCtx.addFavorite(item.item.id);
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <FavoriteButton pressHandler={onPressFavoriteHandler} name = {IsFavorite ? "star" : "star-outline"} />;
            }
        })
    },[navigation]);

    return (       
        <ScrollView>
        <Image
            style={styles.bigLogo}
            source={{
            uri: item.item.imageUrl,
        }}/>
        
        <View style = {styles.titleContainer}>
        <Text style = {styles.title}> Steps </Text>       
        </View>
        {item.item.steps.map((step) => {
            return (<View style = {styles.innerContainer}><Text>{step}</Text></View>)
        })}            
 

        <View style = {styles.titleContainer}>
        <Text style = {styles.title}> Ingridients</Text>       
         </View>
        {item.item.ingredients.map((step) => {
            return (<View style = {styles.innerContainer}><Text>{step}</Text></View>)
        })}

  
    </ScrollView>
    );
}

const styles = StyleSheet.create({
    bigLogo: {
        maxWidth: '100%',
        height: 200,
     },
    titleContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderBottomColor: 'black',
        borderBottomWidth:1,
        marginVertical: 4,
        marginHorizontal: 50
    },
    title: {
        fontFamily: "Cochin",
        fontSize: 25,
    },
    list: {

    },
    innerContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    }
})

export default Sintagi;