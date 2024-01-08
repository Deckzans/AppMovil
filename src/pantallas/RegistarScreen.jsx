import React, { useState } from "react";
import { View, Text, TextInput, Button, ToastAndroid, TouchableOpacity } from "react-native";
import axios from "axios";

const RegistrarScreen = (props) => {
    const [usuario, setUsuario] = useState({
        email: "",
        nombre: "",
        descripcion: "",
        password: "",
        tipo: "normal",
    });

    const handleInputChange = (name, value) => {
        setUsuario({ ...usuario, [name]: value });
    };

    
    const handleSubmit = async () => {
        // Validar que los campos requeridos no estén en blanco
        if (!usuario.email || !usuario.nombre || !usuario.password) {
            ToastAndroid.show('Completa los campos requeridos', ToastAndroid.SHORT);
            return;
        }

        try {
            const response = await axios.post(
                "https://back-production-862b.up.railway.app/administradores/agregar",
                usuario
            );
            if (response.status === 200) {
                ToastAndroid.show('Registrado Correctamente', ToastAndroid.SHORT);
                props.navigation.navigate('Login');
            }
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    const handleIr =  () => { 
        props.navigation.navigate('Login');
    };

    return (
        <View style={{ margin: 16 }}>
            <Text style={{ fontSize: 24, textAlign: "center", marginBottom: 16, color: "black" }}>
                Registro de Usuarios
            </Text>

            <TextInput
                style={{
                    height: 40,
                    borderColor: "gray",
                    borderWidth: 1,
                    marginBottom: 16,
                    paddingHorizontal: 8,
                    color: "black",
                }}
                placeholder="Email  /este campo es requerido "
                placeholderTextColor={"black"}
                keyboardType="email-address"
                value={usuario.email}
                onChangeText={(text) => handleInputChange("email", text)}
            />

            <TextInput
                style={{
                    height: 40,
                    borderColor: "gray",
                    borderWidth: 1,
                    marginBottom: 16,
                    paddingHorizontal: 8,
                    color: "black"
                }}
                placeholder="Nombre /este campo es requerido"
                placeholderTextColor={"black"}
                value={usuario.nombre}
                onChangeText={(text) => handleInputChange("nombre", text)}
            />

            <TextInput
                style={{
                    height: 40,
                    borderColor: "gray",
                    borderWidth: 1,
                    marginBottom: 16,
                    paddingHorizontal: 8,
                    color: "black"
                }}
                placeholder="Descripción"
                placeholderTextColor={"black"}
                value={usuario.descripcion}
                onChangeText={(text) => handleInputChange("descripcion", text)}
            />

            <TextInput
                style={{
                    height: 40,
                    borderColor: "gray",
                    borderWidth: 1,
                    marginBottom: 16,
                    paddingHorizontal: 8,
                    color: "black"
                }}
                placeholder="Contraseña /este campo es requerido"
                secureTextEntry={true}
                placeholderTextColor={"black"}
                value={usuario.password}
                onChangeText={(text) => handleInputChange("password", text)}
            />

            <TextInput
                style={{
                    height: 40,
                    borderColor: "gray",
                    borderWidth: 1,
                    marginBottom: 16,
                    paddingHorizontal: 8,
                    color: "black"
                }}
                placeholder="Tipo de Usuario"
                placeholderTextColor={"black"}
                value={usuario.tipo}
                editable={false}
            />

            <View  style={{ marginBottom: 10 }}>
                <Button title="Registrarse" onPress={handleSubmit} />
            </View>

            <View>
                <Button title="Ir a login" onPress={handleIr} />
            </View>


        </View>
    );
};

export default RegistrarScreen;
