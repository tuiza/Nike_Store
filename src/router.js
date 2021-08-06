import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native';
import {Feather} from '@expo/vector-icons'; /* carronho */


import Home from './pages/Home'; /* pág principal */
import Detail from './pages/Detail'; /* pag de detalhes */

const Stack = createNativeStackNavigator();

function Routes() {
    
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen /* tela da Home */ 
                /* propriedades */
                name='Home'
                component={Home}
                options={{headerShown:false}}> 
                </Stack.Screen>
                <Stack.Screen /* tela de detalhes */
                name='Detail'
                component={Detail}
                options={{
                    headerRight:() => (
                        <TouchableOpacity style={{marginRight:15}}>
                            <Feather
                                name='shopping-cart'
                                size={24}
                                color='black'>
                            </Feather>
                        </TouchableOpacity>
                    )
                }}
                >    
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;