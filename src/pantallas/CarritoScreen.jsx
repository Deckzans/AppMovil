import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Styles } from '../Theme/AppTheme';
import { useUsuarioStore } from '../context/Contex';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Ionicons';


export const CarritoScreen = (props) => {
  const [productos, setProductos] = useState([]);
  const { authUsuario, emailUsuario, tokenUsuario } = useUsuarioStore();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    traerProductos();
  }, [])

  React.useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      traerProductos();
      console.log('Refreshed!');
    })
    return unsubscribe;
  }, [props.navigation])

  const calcularCarritoTotal = async () => {
    const config = {
      headers: {
        'x-access-token': tokenUsuario,
      }
    };
    const response = await axios.get(`http://10.0.0.7:5000/carrito/calculartotal/${emailUsuario}`, config);
    setTotal(response.data.resultado[0].total)
  }

  const traerProductos = async () => {
    const config = {
      headers: {
        'x-access-token': tokenUsuario,
      }
    };
    const response = await axios.get(
      `http://10.0.0.7:5000/productos/${emailUsuario}`,
      config,
    );
    setProductos(response.data);
    calcularCarritoTotal();
  }

  const handleEliminar = async (id) => {
    const config = {
      headers: {
        'x-access-token': tokenUsuario,
      }
    };
    const response = await axios.post(
      `http://10.0.0.7:5000/carrito/eliminar`, { id },
      config,
    );
    traerProductos();
  }


  const handleAgregarCantidad = async (id) => {
    const config = {
      headers: {
        'x-access-token': tokenUsuario,
      }
    };
    const response = await axios.post(
      `http://10.0.0.7:5000/carrito/agregarcantidad`, { id },
      config,
    );
    traerProductos();
  }


  const handleQuitarCantidad = async (id) => {
    const config = {
      headers: {
        'x-access-token': tokenUsuario,
      }
    };
    const response = await axios.post(
      `http://10.0.0.7:5000/carrito/quitarcantidad`, { id },
      config,
    );
    traerProductos();
  }


  return (
    <View style={Styles.globalMargin} >
      <ScrollView>
        <Text style={Styles.title_carrito}> Carrito de compras </Text>
      </ScrollView>
      {productos.map(producto => (
        <View style={Styles.carrito_container} key={producto.id}  >
          <View style={Styles.carrito_vistas} >
            <Image
              source={{
                uri: `http://10.0.0.7:5000/img/avatar/${producto.foto_amp}`,
              }}
              style={Styles.avatar_productos}
            />
          </View>
          <View style={Styles.carrito_vistas} >
            <Text style={Styles.carrito_texto_titulo}> {producto.nombre_amp} </Text>
            <Text style={Styles.texto_car}> {producto.precio_amp} </Text>
            <Text style={Styles.texto_car}> {producto.cantidad} </Text>
            <Text style={Styles.texto_car}> {producto.subtotal} </Text>

          </View>
          <View style={Styles.carrito_vista_botones}>
            <TouchableOpacity style={Styles.carrito_boton} onPress={() => handleAgregarCantidad(producto.id)}>
              <Icon name='add-circle-sharp' size={40} color="#900" />
            </TouchableOpacity>
            <TouchableOpacity style={Styles.carrito_boton} onPress={() => handleQuitarCantidad(producto.id)}>
              <Icon name='remove-circle-sharp' size={40} color="#900" />
            </TouchableOpacity>
            <TouchableOpacity style={Styles.carrito_boton} onPress={() => handleEliminar(producto.id)}>
              <Icon name='trash-sharp' size={40} color="#900" />
            </TouchableOpacity>
          </View>

        </View>

      ))}

      <View style={Styles.carrito_total_container}>
        <Text style={Styles.carrito_total_texto} > Total: {total} </Text>
      </View>

    </View>
  )
}

export default CarritoScreen;