import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, ToastAndroid } from 'react-native';
import {Styles4,colores } from '../Theme/AppTheme';
import { useUsuarioStore } from '../context/Contex';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Ionicons';


const initialState = {
  clave: '',
  nombre: '',
  linea: '',
  modelo: '',
  marca: '',
  potencia: '',
  clase: '',
  canales: '',
  precio: '',
  color: '',
  cantidad: '',
  descripcion: '',
  foto: '',
}

export const ProductoScreen = (props) => {
  const id = props.route.params.clave;
  const [ampli, SetAmpli] = useState(initialState);
  const { clave, nombre, linea, modelo, marca, potencia, clase, canales, precio, color, cantidad, descripcion, foto } = ampli;
  const { authUsuario, emailUsuario, nombreUsuario, fotoUsuario, tokenUsuario } = useUsuarioStore();

  const { navigation } = props;

  useEffect(() => {
    traerAmplificador(id);
  }, []);

  const traerAmplificador = (cl) => {
    axios.get(`https://back-production-862b.up.railway.app/amplificador/traer/${cl}`)
      .then(function (response) {
        SetAmpli(response.data[0])
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  const mandarCarrito = async () => {

    const producto = {
      email: emailUsuario,
      clave_amp: clave,
      nombre_amp: nombre,
      descripcion_amp: descripcion,
      foto_amp: foto,
      precio_amp: precio,
    }

    const config = {
      headers: {
        'x-access-token': tokenUsuario,
      }
    }

    const response = await axios.post(`https://back-production-862b.up.railway.app/carrito/agregar`, producto, config);
    if (response.data.status === 200) {
      ToastAndroid.show('Producto agregado al carrito', ToastAndroid.SHORT);
      navigation.navigate('Home');
    }
  }

  return (
    <View style={Styles4.container} >
      <Image
        source={{
          uri: `https://back-production-862b.up.railway.app/img/avatar/${foto}`
        }}
        style={Styles4.avatar}
      />
      <Text style={Styles4.title}>{nombre} </Text>
      <Text style={Styles4.texto_producto1}>Modelo: {modelo} </Text>
      <Text style={Styles4.texto_producto1}>Marca: {marca} </Text>
      <Text style={Styles4.texto_producto1}>Clase: {clase} </Text>
      <Text style={Styles4.texto_producto1}>Precio: {precio} </Text>
      <Text style={Styles4.texto_producto1}>Color: {color} </Text>
      <Text style={Styles4.texto_producto1}>Cantidad: {cantidad} </Text>
      <Text style={Styles4.texto_producto1}>Descripcion: {descripcion} </Text>
      <TouchableOpacity onPress={() => mandarCarrito()}>
        <View style={Styles4.boton_producto} >
          <Icon name="bag-handle-sharp" size={30} color={colores.siete} />
          <Text style={Styles4.menuTexto}>Enviar al carrito </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default ProductoScreen;
