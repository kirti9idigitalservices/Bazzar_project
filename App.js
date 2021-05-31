import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Feedback from "./app/screens/Feedback";
import RequirementSummary from './app/screens/RequirementSummary';
import Sell1 from './app/screens/Sell1';
import Sell2 from './app/screens/Sell2';
import Sell3 from './app/screens/Sell3';
import Sell4 from './app/screens/Sell4';
import Sell5 from './app/screens/Sell5';
import Sell6 from './app/screens/Sell6';
import Congrats from './app/screens/Congrats';
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Congrats">
      <Stack.Screen name="Feedback" component={Feedback} />
      <Stack.Screen name="RequirementSummary" component={RequirementSummary} />
      <Stack.Screen name="Sell1" component={Sell1} />
      <Stack.Screen name="Sell2" component={Sell2} />
      <Stack.Screen name="Sell3" component={Sell3} />
      <Stack.Screen name="Sell4" component={Sell4} />
      <Stack.Screen name="Sell5" component={Sell5} />
      <Stack.Screen name="Sell6" component={Sell6} />
      <Stack.Screen name="Congrats" component={Congrats} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
