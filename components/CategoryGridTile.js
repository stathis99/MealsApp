import { View , Pressable, Text, StyleSheet} from "react-native";

function CategotyGridTile({title, color, onPress}){


    return (
    <View style = {styles.gridItem}>
        <Pressable style = {styles.button} onPress={onPress} >
            <View style = {[styles.innerContainer, {backgroundColor: color}]}>
                <Text style={styles.baseText} >{title}</Text>
            </View> 
        </Pressable>
    </View>

    );
}

export default CategotyGridTile;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 19,
        height: 100,
        borderRadius: 8,
        elevation: 7
    },
    button: {
        flex: 1
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    baseText: {
        fontFamily: "Cochin",
        fontSize: 19,
        fontWeight: "bold"
    }

});