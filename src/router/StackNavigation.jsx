import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../pantallas/HomeScreen';
import ProductoScreen from '../pantallas/ProductoScreen';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Producto" component={ProductoScreen} />
    </Stack.Navigator>
  );
}

export default StackNavigation;