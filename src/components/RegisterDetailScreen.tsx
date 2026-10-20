import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';

type NavigationProp = StackNavigationProp<RootStackParamList, 'RegisterDetail'>;

export default function RegisterDetailScreen({ navigation }: { navigation: NavigationProp }) {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Регистрация</Text>
      <TextInput style={styles.input} placeholder="Номер телефона" value={phone} onChangeText={setPhone} keyboardType="phone-pad" />
      <TextInput style={styles.input} placeholder="Пароль" secureTextEntry value={password} onChangeText={setPassword} />
      
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('City')}>
        <Text style={styles.buttonText}>Зарегистрироваться</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 30 },
  input: { width: '100%', height: 50, borderWidth: 1, borderColor: '#ccc', borderRadius: 8, paddingHorizontal: 15, marginBottom: 15 },
  button: { backgroundColor: '#A020F0', width: '100%', height: 50, borderRadius: 8, justifyContent: 'center', alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' }
});