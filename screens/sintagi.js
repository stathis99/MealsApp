import { Text, View , StyleSheet, Image, Pressable, FlatList} from "react-native";




function Sintagi({ route, navigation }){
    const item = route.params.item



    return (       
        <View>
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







   
      
    </View>
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
        height: 100
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
        height: 20
    }
})

export default Sintagi;