import { Themes } from "./assets/Themes";
import MainScreen from "./MainScreen";
import NextScreen from './NextScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main screen"
          component={MainScreen}
          options={{ 
            headerShown: false,
            title: 'Back',
          }}
        />
        <Stack.Screen 
          name="Song details" 
          component={NextScreen} 
          options={{ 
            headerStyle: {
              backgroundColor: Themes.colors.background,
            },
            headerTitleStyle: {
              color: 'white'
            }
         }}
        />
        <Stack.Screen 
          name="Song preview" 
          component={NextScreen} 
          options={{ 
            headerStyle: {
              backgroundColor: Themes.colors.background,
            },
            headerTitleStyle: {
              color: 'white'
            }
         }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}