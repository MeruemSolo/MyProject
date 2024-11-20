import React from 'react';
   import { NavigationContainer } from '@react-navigation/native';
   import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
   import AboutScreen from './screens/AboutScreen';
   import ProgrammingLanguagesScreen from './screens/ProgrammingLanguagesScreen';

   const Tab = createBottomTabNavigator();

   const App = () => {
     return (
       <NavigationContainer>
         <Tab.Navigator>
           <Tab.Screen name="О Себе" component={AboutScreen} />
           <Tab.Screen name="Мои языки программирования" component={ProgrammingLanguagesScreen} />
         </Tab.Navigator>
       </NavigationContainer>
     );
   };

   export default App;