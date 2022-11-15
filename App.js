import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen  from './screens/categories_screens';
import { NavigationContainer } from  '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MealsOverview from './screens/MealsOverview'
import Sintagi from './screens/sintagi';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FavoriteMeals from './screens/FavoriteMeals';
import { Ionicons } from '@expo/vector-icons';
import FavoritesContextProvider from './store/context/favoreites-context';


const Bottom = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function BottomNavigator() {
  return (
    <Bottom.Navigator>
        <Bottom.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{tabBarIcon: () => (
        <Ionicons name= "home" size="25"/>
        ),
      }}
      />
        <Bottom.Screen
        name="Favorite"
        component={FavoriteMeals}
        options={{tabBarIcon: () => (
          <Ionicons name= "star" size="25"/>
          ),
        }}
      />
    </Bottom.Navigator>
  );
}



export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <FavoritesContextProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: {backgroundColor: "#f0f8ff"}
        }}>
          <Stack.Screen options={{headerShown: false}} name="DrawrerScreen" component={BottomNavigator} />
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
      </FavoritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});