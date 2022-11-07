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
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Song details" component={NextScreen} />
        <Stack.Screen name="Song preview" component={NextScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}