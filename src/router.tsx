import * as React from 'react';
import ResultsScreen from './screens/ResultsScreen/ResultsScreen';
import TestsScreen from './screens/TestsScreen/TestsScreen';
import {ROUTES} from './constants';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name={ROUTES.RESULTS_SCREEN} component={ResultsScreen} />
        <Tab.Screen name={ROUTES.TEST_SCREEN} component={TestsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
