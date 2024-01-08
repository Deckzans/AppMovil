import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Styles, Styles5, colores } from '../Theme/AppTheme';
import { useUsuarioStore } from '../context/Contex';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Ionicons';

const CarritoScreen = (props) => {
  const [productos, setProductos] = useState([]);
  const { authUsuario, emailUsuario, tokenUsuario } = useUsuarioStore();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    traerProductos();
  }, []);

  React.useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      traerProductos();
      console.log('Refreshed!');
    });
    return unsubscribe;
  }, [props.navigation]);

  const calcularCarritoTotal = async () => {
    const config = {
      headers: {
        'x-access-token': tokenUsuario,
      }
    };
    const response = await axios.get(`https://back-production-862b.up.railway.app/carrito/calculartotal/${emailUsuario}`, config);
    setTotal(response.data.resultado[0].total);
  };

  const traerProductos = async () => {
    const config = {
      headers: {
        'x-access-token': tokenUsuario,
      }
    };
    const response = await axios.get(
      `https://back-production-862b.up.railway.app/productos/${emailUsuario}`,
      config,
    );
    setProductos(response.data);
    calcularCarritoTotal();
  };

  const handleEliminar = async (id) => {
    const config = {
      headers: {
        'x-access-token': tokenUsuario,
      }
    };
    const response = await axios.post(
      `https://back-production-862b.up.railway.app/carrito/eliminar`, { id },
      config,
    );
    traerProductos();
  };

  const handleAgregarCantidad = async (id) => {
    const config = {
      headers: {
        'x-access-token': tokenUsuario,
      }
    };
    const response = await axios.post(
      `https://back-production-862b.up.railway.app/carrito/agregarcantidad`, { id },
      config,
    );
    traerProductos();
  };

  const handleQuitarCantidad = async (id) => {
    const config = {
      headers: {
        'x-access-token': tokenUsuario,
      }
    };
    const response = await axios.post(
      `https://back-production-862b.up.railway.app/carrito/quitarcantidad`, { id },
      config,
    );
    traerProductos();
  };

  return (
    <View style={Styles.globalMargin} >
      <ScrollView>
        <Text style={Styles5.title_carrito}> Carrito de compras </Text>
        {productos.map(producto => (
          <View style={Styles5.carrito_container} key={producto.id}  >
            <View style={Styles5.carrito_vistas} >
              <Image
                source={{
                  uri: `https://back-production-862b.up.railway.app/img/avatar/${producto.foto_amp}`,
                }}
                style={Styles5.avatar_productos}
              />
            </View>
            <View style={Styles5.carrito_vistas} >
              <Text style={Styles5.carrito_texto_titulo}> {producto.nombre_amp} </Text>
              <Text style={Styles5.texto_car}> Precio: {producto.precio_amp} </Text>
              <Text style={Styles5.texto_car}> Cantidad: {producto.cantidad} </Text>
              <Text style={Styles5.texto_car}> Subtotal: {producto.subtotal} </Text>
            </View>
            <View style={Styles5.carrito_vista_botones}>
              <TouchableOpacity style={Styles5.carrito_boton} onPress={() => handleAgregarCantidad(producto.id)}>
                <Icon name='add-circle-sharp' size={30} color={colores.uno} />
              </TouchableOpacity>
              <TouchableOpacity style={Styles5.carrito_boton} onPress={() => handleQuitarCantidad(producto.id)}>
                <Icon name='remove-circle-sharp' size={30} color={colores.uno} />
              </TouchableOpacity>
              <TouchableOpacity style={Styles5.carrito_boton} onPress={() => handleEliminar(producto.id)}>
                <Icon name='trash-sharp' size={30} color={colores.uno} />
              </TouchableOpacity>
            </View>
          </View>
        ))}
        <View style={Styles5.carrito_total_container}>
          <Text style={Styles5.carrito_total_texto} > Total: {total} </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default CarritoScreen;
