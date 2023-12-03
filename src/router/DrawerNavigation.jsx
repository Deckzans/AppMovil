import { DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigation from './StackNavigation';
import LoginScreen from '../pantallas/LoginScreen';
import CarritoScreen from '../pantallas/CarritoScreen';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { Styles } from '../Theme/AppTheme';
import Icon from 'react-native-vector-icons/Ionicons'
import { useUsuarioStore } from '../context/Contex'

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator
      drawerContent={props => <MenuInterno {...props} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#c6cbef',
          width: 240,
        },
      }}
    >
      <Drawer.Screen name="Login" component={LoginScreen} />
      <Drawer.Screen name="StackNavigator" component={StackNavigation} />
      <Drawer.Screen name="Carrito" component={CarritoScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigation;

const MenuInterno = (props) => {
  const { authUsuario, nombreUsuario, fotoUsuario, singOut } = useUsuarioStore();
  const salir = () => {
    props.navigation.navigate('Login')
    singOut();
  }
  return (
    <DrawerContentScrollView>
      <View style={Styles.avatarContainer}>
        <Image
          // source={{ uri: `http://10.0.2.2:5000/img/usuarios/${fotoUsuario}` }}
          source={{ uri: `http://10.0.0.7:5000/img/usuarios/${fotoUsuario}`}}

          style={Styles.avatar}
        />
        <Text style={Styles.menuTexto}>{nombreUsuario} </Text>
      </View>
      {

        authUsuario ?
          <View style={Styles.menuContainer}>
            <TouchableOpacity
              style={Styles.MenuBoton}
              onPress={() => props.navigation.navigate('StackNavigator')}>
              <View style={{ alignItems: 'center' }} >
                <Icon name='bag-check-sharp' size={30} color='#D31616' />
                <Text style={Styles.menuTexto} >Ir a compras</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={Styles.MenuBoton}
              onPress={() => props.navigation.navigate('Carrito')}>
              <View style={{ alignItems: 'center' }} >
                <Icon name='cart-sharp' size={30} color='#D31616' />
                <Text style={Styles.menuTexto} >Ir al carrito de compras</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={Styles.MenuBoton}
              onPress={() => salir()}
            >
              <View style={{ alignItems: 'center' }} >
                <Icon name='log-out-sharp' size={30} color='#D31616' />
                <Text style={Styles.menuTexto} >Cerrar Sesion</Text>
              </View>
            </TouchableOpacity>
          </View>
          : <View style={Styles.menuContainer}> 
            <Text style={Styles.menuTexto} >No tienes las credenciales ingresa tus datos de usuario</Text>
            <TouchableOpacity
              style={Styles.MenuBoton}
              onPress={() => props.navigation.navigate('Login')}>
              <View style={{ alignItems: 'center' }} >
                <Icon name='log-in-sharp' size={30} color='#D31616' />
                <Text style={Styles.menuTexto} >Ingresar</Text>
              </View>
            </TouchableOpacity>
            </View>

          }
    </DrawerContentScrollView>
  )
}