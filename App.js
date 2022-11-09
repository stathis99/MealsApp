import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen  from './screens/categories_screens';
import { NavigationContainer } from  '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MealsOverview from './screens/MealsOverview'
import Sintagi from './screens/sintagi';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: {backgroundColor: "#f0f8ff"}
        }}>
          <Stack.Screen options = {{title: "Categories" }}  name="MealsCategories" component={CategoriesScreen} />
          <Stack.Screen name="MealsOverview" component={MealsOverview} 
          // options = {({route, navigation}) => {
          //   const catId = route.params.categoryId;
          //   const backColor = route.params.catColor;
          //   return {
          //     title: catId,
          //     headerStyle: {backgroundColor: backColor}
          //   };
          // }}
          />
          <Stack.Screen name="Sintagi" component={Sintagi}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});