import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./screens/Login.jsx";
import Perfil from "./screens/Perfil.jsx";
import Form from "./screens/Form.jsx";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// const MyTabs = () => {
//     return(
//         <Tab.Navigator>
//             <Tab.Screen name="Form" component={Form} />
//             <Tab.Screen name="Perfil" component={Perfil} />
//         </Tab.Navigator>
//     )
// }
const MyStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} /> 
            <Stack.Screen name="Form" component={Form} />
            <Stack.Screen name="Perfil" component={Perfil} />
        </Stack.Navigator>
    )
}

export default Navegation = () => {
    return(
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    )
}