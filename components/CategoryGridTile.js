import { View , Pressable, Text, StyleSheet} from "react-native";

function CategotyGridTile({title, color, onPress}){


    return (
    <View style = {styles.gridItem}>
        <Pressable style = {styles.button} onPress={onPress} >
            <View style = {[styles.innerContainer, {backgroundColor: color}]}>
                <Text>{title}</Text>
            </View> 
        </Pressable>
    </View>

    );

}

export default CategotyGridTile;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4
    },
    button: {
        flex: 1
    },
    innerContainer: {
        flex: 1,
        padding:16,
        justifyContent: 'center'
    }

});