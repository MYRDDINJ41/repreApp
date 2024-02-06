import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Image
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();

  return (
    <View className = 'bg-[#0079C2] h-full w-full'>
      {/* <View className = 'w-1/2 h-1/2'>
            <Image
            className = "object"
            source={require("../img/repremundo.png")}
        />
      </View> */}
      <View className="h-1/2"></View>
      <View className = "items-center justify-center py-10 px-11">
        <Text className="text-2xl font-bold color-white pb-5">Ingresa</Text>
        <TextInput 
          className="border py-2 px-5 w-full rounded-2xl bg-white my-2" 
          placeholder="Usuario">
        </TextInput>
        <TextInput
          className="border py-2 px-5 w-full rounded-2xl bg-white my-2"
          secureTextEntry={true}
          placeholder="Contraseña"
        ></TextInput>
        <Button
          className = "bg-white py-3"
          title="Entrar"
          onPress={() => navigation.navigate("Perfil")}>
        </Button>
        <Text
         className = "text-white py-3 text-base">
          ¿No tienes cuenta?
          <TouchableWithoutFeedback onPress={() => navigation.navigate("Form")}>
            <Text
            className = "text-white font-bold underline"> 
            Registrate</Text>
          </TouchableWithoutFeedback>
        </Text>
        <Text
         className = "text-white text-base">
          ¿Olvidasste tu contraseña? 
          <TouchableWithoutFeedback onPress={() => navigation.navigate("Form")}>
            <Text
            className = "text-white font-bold underline"> 
            Recuperar</Text>
          </TouchableWithoutFeedback>
        </Text>
      </View>
    </View>
  );
};

export default Login;
