import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import { Navigation } from './src/navigation/Navigation';
import { FadeScreen } from './src/screens/FadeScreen';

const App = () => {
  return (
    <NavigationContainer>
      <FadeScreen></FadeScreen>
      {/* <Navigation/>             */}
    </NavigationContainer>
  )
}
export default App;
