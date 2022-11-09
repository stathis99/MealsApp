import { CATEGORIES } from '../data/dummy-data'
import { FlatList, Text } from 'react-native'
import CategorieGridTile  from '../components/CategoryGridTile'
import { createNativeStackNavigator } from '@react-navigation/native-stack'



function CategoriesScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate('MealsOverview', {
        categoryId: itemData.item.id,
        catColor: itemData.item.color,
      });
    }

    return (
      <CategorieGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;