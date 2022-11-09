import { Text, View , StyleSheet, Image, Pressable} from "react-native";




function MealItem({ itemData, onPressFunction }){

    return (<Pressable style = {[styles.gridItem, {backgroundColor: 'darkkhaki'}]} onPress={onPressFunction}>  
        <View style = {styles.innerContainer}>
        <Text style = {styles.title}>{itemData.item.title}</Text>
        </View>
        <Image
        style={styles.tinyLogo}
        source={{
          uri: itemData.item.imageUrl,
        }}
      />
        <View style = {styles.descriptionContainer}>
        <Text style = {styles.desctiptionText}> {itemData.item.duration}'</Text>
        <Text style = {styles.desctiptionText}>{itemData.item.affordability}</Text>
        <Text style = {styles.desctiptionText}>{itemData.item.complexity}</Text>
        </View>

    </Pressable>);
}

const styles = StyleSheet.create({
    gridItem: {
        margin: 5,
        height: 200,
        borderRadius: 10,
        elevation: 7,
    },
    tinyLogo: {
        flex: 1
      },
    title: {
        fontFamily: "Cochin",
        fontSize: 19,

    },
    innerContainer: {
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',

    },
    descriptionContainer: {
        flexDirection: 'row',
        margin: 10,
        justifyContent: "space-between",
        alignItems: 'center',
        
    },
    desctiptionText: {
        fontFamily: "Cochin",
        fontSize: 15,
    }
});
export default MealItem;