import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './src/screens/WelcomeScreen';
import CreateAccountScreen from './src/screens/CreateAccountScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false, // Oculta el header por defecto
        }}
      >
        <Stack.Screen 
          name="Welcome" 
          component={WelcomeScreen} 
        />
        <Stack.Screen 
          name="CreateAccount" 
          component={CreateAccountScreen} 
        />
        {/* Aquí puedes agregar más pantallas como Login, etc. */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;