import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useLayoutEffect } from 'react';
import { MEALS ,CATEGORIES } from '../data/dummy-data';

import MealItem from '../components/MealItem';





function MealsOverview({ route, navigation }) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });


  function renderMealItem(itemData){
    return <MealItem itemData = {itemData} />
  };

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;
    const categoryColor = CATEGORIES.find((category) => category.id === catId).color;
  
    navigation.setOptions({
      title: categoryTitle,
      //headerStyle: {backgroundColor: categoryColor},

  
    });

  }, [catId, navigation]);

  


  return (
    <View style={styles.container}>

    <FlatList
      data = {displayedMeals}
      keyExtractor = {(item)=> item.id}
      renderItem = {renderMealItem}
    />

    </View>
  );
}

export default MealsOverview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});