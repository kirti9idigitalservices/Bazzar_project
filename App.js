import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Feedback from "./app/screens/Feedback";
import RequirementSummary from './app/screens/RequirementSummary';
import Sell1 from './app/screens/Sell1';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Feedback">
      <Stack.Screen name="Feedback" component={Feedback} />
      <Stack.Screen name="RequirementSummary" component={RequirementSummary} />
      <Stack.Screen name="Sell1" component={Sell1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
