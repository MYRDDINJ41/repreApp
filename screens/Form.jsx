import React from "react";
import { View, TextInput, Text, Button } from "react-native";
import RNPickerSelect from 'react-native-picker-select';

const Form = () => {
    return (
        <View 
            className = "px-11 bg-white ">
            <Text
                className = "text-center font-bold text-2xl pt-4 pb-2"
            >Regístrase</Text>
            <TextInput
                className="border border-[#0079C2] py-2 px-5 w-full rounded-2xl bg-white my-2"
                placeholder="Primer Nombre">
            </TextInput>
            <TextInput
                className="border border-[#0079C2] py-2 px-5 w-full rounded-2xl bg-white my-2"
                placeholder="Segundo Nombre">
            </TextInput>
            <TextInput
                className="border border-[#0079C2] py-2 px-5 w-full rounded-2xl bg-white my-2"
                placeholder="Primer Apellido">
            </TextInput>
            <TextInput
                className="border border-[#0079C2] py-2 px-5 w-full rounded-2xl bg-white my-2"
                placeholder="Segundo Apellido">
            </TextInput>
            <TextInput
                className="border border-[#0079C2] py-2 px-5 w-full rounded-2xl bg-white my-2"
                placeholder="Numero de teléfono">
            </TextInput>
            <TextInput
                className="border border-[#0079C2] py-2 px-5 w-full rounded-2xl bg-white my-2"
                placeholder="Numero de celular">
            </TextInput>
            <TextInput
                className="border border-[#0079C2] py-2 px-5 w-full rounded-2xl bg-white my-2"
                placeholder="E-mail">
            </TextInput>
            <TextInput
                className="border border-[#0079C2] py-2 px-5 w-full rounded-2xl bg-white my-2"
                placeholder="Numero de Documento">
            </TextInput>
            <RNPickerSelect
            className = "border"
            onValueChange={(value) => console.log(value)}
            items={[
                { label: 'Cargo1', value: 'Cargo1' },
                { label: 'Cargo2', value: 'Cargo2' },
                { label: 'Cargo3', value: 'Cargo3' },
            ]}
            />
            <TextInput
                className="border border-[#0079C2] py-2 px-5 w-full rounded-2xl bg-white my-2"
                placeholder="Razon Social">
            </TextInput>
            <Button title="Registrar" color = "">
                Registar
            </Button>

        </View>
    )
}

export default Form;