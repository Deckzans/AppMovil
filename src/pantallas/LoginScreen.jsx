import React, { useState } from 'react';
import {View,Image,Text,TextInput,TouchableOpacity,ToastAndroid,Button} from 'react-native';
import {Styles,colores} from '../Theme/AppTheme';
import logInImage from '../images/rojo.jpg';
import axios from 'axios';
import {useUsuarioStore} from '../context/Contex'


const initialState = { 
  email: '',
  password:'',
}

export const LoginScreen = (props) => {


  const [usuario,setUsuario] = useState(initialState);
  const {email,password} = usuario;
  const LOGIN_IMAGE = Image.resolveAssetSource(logInImage).uri;
  const {signIn} = useUsuarioStore();
  const cambiar = (auth1,email1,nombre1,foto1,token1) => { 
    signIn(auth1,email1,nombre1,foto1,token1);
  }

  const handleChange = (nom,valor) =>{ 
    setUsuario({...usuario,[nom]:valor });
  }

  const handleSubmit = async () => { 
    
    const response = await axios.post('https://back-production-862b.up.railway.app/usuarios/ingresar',
    usuario,
    );

  
    if(response.data.resultado === 2) { 
      setUsuario(initialState); 
      cambiar(
        true,
        response.data.email,
        response.data.nombre,
        response.data.foto,
        response.data.token, 
      );
      ToastAndroid.show('datos Correctos', ToastAndroid.SHORT);
      props.navigation.navigate('Menu');
    }
  };

  const handleIr =  () => { 
      props.navigation.navigate('Registar');
  };

  

 
  return (
    <View style={Styles.login_container}>
       <Image source={{uri: LOGIN_IMAGE}}  style={Styles.login_image} />
       <Text style={Styles.login_texto} > Introduce tu correo y contraseña </Text>
          <TextInput 
          placeholder='email'
         placeholderTextColor='black'
          textAlign='center'
          style={Styles.login_input}
          secureTextEntry={false}
          value={email}
          onChangeText={valor => handleChange('email',valor)}
       />
       <TextInput 
          placeholder='Contraseña'
          placeholderTextColor={colores.negro}
          textAlign='center'
          style={Styles.login_input}
          secureTextEntry={true}
          value={password}
          onChangeText={valor => handleChange('password',valor)}
       />

      <TouchableOpacity style={{flex:1}} onPress={handleSubmit} > 
        <View style={Styles.login_boton} >
              <Text style={Styles.login_boton_texto} > Ingresar </Text>
        </View>
      </TouchableOpacity>
      <Button
        title="Ir a UsuariosRegistrar"
        onPress={ handleIr }
      />

    </View>
  )
}

export default LoginScreen;