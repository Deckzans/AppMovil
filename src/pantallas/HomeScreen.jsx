import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, Linking } from 'react-native';
import { Styles, colores, Styles2, Styles3 } from '../Theme/AppTheme';
import Icon from 'react-native-vector-icons/Ionicons'
import axios from 'axios';

export const HomeScreen = (props) => {
  const [amplificadores, setAmplificador] = useState([]);
  useEffect(() => {
    traerAmplificadores();
  }, []);

  const traerAmplificadores = async () => {
    const response = await axios.get('https://back-production-862b.up.railway.app/amplificadores');
    setAmplificador(response.data);
  }

  const { navigation } = props;

  const handleWhatsapp = async () => {
    const phoneNumber = '6181264741';
    const message = 'Hola Me gustaria agendar una cita, ¿Tiene fechas disponibles?';
    const whatsappLink = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

    await Linking.openURL(whatsappLink).catch(() => {
      alert('No se puede abrir WhatsApp. Asegúrate de tener la aplicación instalada.');
    });
  };

  const handleLlamada = async () => {
    const phoneNumber = 'tel:+1234567890';
    await Linking.openURL(phoneNumber);
  };

  const handleCorreo = async () => {
    const correo = 'mailto:zdavid505@gmail.com?subject=Cita con el dentista&body=Hola Quiero Agendar una cita con usted';
    await Linking.openURL(correo);
  };

  return (
    <View style={{ ...Styles.globalMargin, ...Styles2.fila_productos }}>
      <ScrollView>
        {amplificadores.map(amplificador => (
          <View key={amplificador.clave} style={{ ...Styles.producto_productos, ...Styles3.cardContainer }}>
            <Image
              source={{ uri: `https://back-production-862b.up.railway.app/img/avatar/${amplificador.foto}` }}
              style={Styles.avatar_productos}
            />
            <Text style={Styles2.producto_texto_productos}>Nombre: {amplificador.nombre} </Text>
            <Text style={Styles2.producto_texto_productos}>Precio: {amplificador.precio} </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Producto', { clave: amplificador.clave })}
            >
              <View style={Styles2.producto_boton_productos}>
                <Icon style={{ marginRight: 10 }} name='layers-sharp' size={30} color='#FFFFFF' />
                <Text style={Styles2.menuTexto}>Ver detalles </Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      {/* Botones flotantes */}
      <View style={Styles.floatingButtonsContainer}>
        <TouchableOpacity style={Styles.floatingButton} onPress={handleWhatsapp}>
          <Icon name="logo-whatsapp" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={Styles.floatingButton2} onPress={handleCorreo}>
          <Icon name="mail-outline" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={Styles.floatingButton3} onPress={handleLlamada}>
          <Icon name="call" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default HomeScreen;
