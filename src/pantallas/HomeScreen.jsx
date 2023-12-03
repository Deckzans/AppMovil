import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView,Image } from 'react-native';
import {Styles,colores} from '../Theme/AppTheme';
import Icon from 'react-native-vector-icons/Ionicons'
import axios from 'axios';



export const HomeScreen = (props) => {
  const [amplificadores, setAmplificador] = useState([]);
  useEffect(() => {
    traerAmplificadores();
  }, []);
  const traerAmplificadores = async () => {
    const response = await axios.get('http://10.0.0.7:5000/amplificadores');
    console.log(response.data)
    setAmplificador(response.data);
    console.log(response.data)
  }

  const { navigation } = props;

  return (
    <View style={{...Styles.globalMargin, ...Styles.fila_productos}}>
      <ScrollView>
        {amplificadores.map(amplificador => (
          <View key={amplificador.clave} style={Styles.producto_productos}>
            <Image
              // source={{ uri: `http://10.0.2.2:5000/img/usuarios/${fotoUsuario}` }}
              source={{ uri: `http://10.0.0.7:5000/img/avatar/${amplificador.foto}`,
             }}

              style={Styles.avatar_productos}
            />
             <Text style={Styles.producto_texto_productos}>{amplificador.nombre} </Text>
             <Text style={Styles.producto_texto_productos}>{amplificador.precio} </Text>
             <TouchableOpacity 
              onPress={()  => navigation.navigate('Producto', {clave:amplificador.clave})}
             > 
                <View style={Styles.producto_boton_productos}> 
                    <Icon  name='layers-sharp' size={30} color='#900'  />
                    <Text style={Styles.menuTexto}>Ver detalle </Text>
                </View>

             </TouchableOpacity>
          </View>
        )
        )}

      </ScrollView>
    </View>
  )
}


export default HomeScreen;
