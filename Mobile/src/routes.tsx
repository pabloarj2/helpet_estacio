import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const AppStack = createNativeStackNavigator()

import {Incidents} from './pages/Incidents'
import {Detail} from './pages/Detail'

export function Routes() {
  return(
    <NavigationContainer independent={true} >
      <AppStack.Navigator screenOptions={{headerShown: false}}>
        <AppStack.Screen name="Incidents" component={Incidents}/>
        <AppStack.Screen name="Detail" component={Detail}/>
      </AppStack.Navigator>
    </NavigationContainer>
  )
}