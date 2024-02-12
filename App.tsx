import React, { Children } from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import { Navigation } from './src/navigation/Navigation';
import { FadeScreen } from './src/screens/FadeScreen';
import { GradientProvider } from './src/context/GradientsContext';




const App = () => {
  return (
    <NavigationContainer>
      <GradientProvider>
         <Navigation/>              
      {/* <FadeScreen></FadeScreen> */}
      </GradientProvider>      
    </NavigationContainer>
  )
}
export default App;
