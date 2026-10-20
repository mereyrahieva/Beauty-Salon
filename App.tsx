import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './src/components/LoginScreen';
import RegisterScreen from './src/components/RegisterScreen';
import RegisterDetailScreen from './src/components/RegisterDetailScreen';
import CityScreen from './src/CityScreen'; 
import ForgotPasswordScreen from './src/components/ForgetPassword';
import VerifyCodeScreen from './src/components/VeryfiCodeScreen';
import ResetPasswordScreen from './src/components/ResetPasswordScreen';

import HomeScreen from './src/components/HomeScreen';
import ProductDetailScreen from './src/components/ProductDetailScreen';
import CartScreen from './src/components/CartScreen';
import OrderSuccessScreen from './src/components/OrderSuccessScreen';
import ProfileScreen from './src/components/ProfileScreen';
import AccountScreen from './src/components/AccountScreen'; // ЖАҢА ФАЙЛДЫ ИМПОРТТАДЫҚ

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  RegisterDetail: undefined;
  City: undefined;
  ForgotPassword: undefined;
  VerifyCode: undefined;
  ResetPassword: undefined;
  Home: undefined;
  ProductDetail: { serviceName: string; servicePrice: string; serviceIcon: string };
  Cart: { serviceName: string; servicePrice: string; selectedMaster: string; selectedTime: string };
  OrderSuccess: undefined;
  Profile: undefined;
  Account: undefined; // ЖАҢА БЕТ ТИПІ
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="RegisterDetail" component={RegisterDetailScreen} />
        <Stack.Screen name="City" component={CityScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="VerifyCode" component={VerifyCodeScreen} />
        <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
        
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="OrderSuccess" component={OrderSuccessScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Account" component={AccountScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}