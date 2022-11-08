import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen  from './screens/categories_screens';
import { NavigationContainer } from  '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MealsOverview from './screens/MealsOverview'



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="MealsCategories" component={CategoriesScreen} />
          <Stack.Screen name="MealsOverview" component={MealsOverview} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});