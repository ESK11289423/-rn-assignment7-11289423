import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react';
import Home from './HomeScreen';
import Cart from './CartScreen';
import ProductDetail from './ProDetail';
import Menu from './Menu';
import 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <Menu {...props} />}>
        <Drawer.Screen name="Home" component={Home} options={{headerShown:false}}/>
        <Drawer.Screen name="Cart" component={Cart} options={{headerShown:false}}/>
        <Drawer.Screen name="ProductDetail" component={ProductDetail} options={{headerShown:false}}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}