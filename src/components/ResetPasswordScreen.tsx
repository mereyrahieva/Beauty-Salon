import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';

type NavigationProp = StackNavigationProp<RootStackParamList, 'ResetPassword'>;

export default function ResetPasswordScreen({ navigation }: { navigation: NavigationProp }) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Сбросить пароль</Text>
      
      <TextInput style={styles.input} placeholder="Новый пароль" secureTextEntry value={password} onChangeText={setPassword} />
      <TextInput style={styles.input} placeholder="Повторите пароль" secureTextEntry value={confirmPassword} onChangeText={setConfirmPassword} />
      
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Продолжить</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 30 },
  input: { width: '100%', height: 50, borderWidth: 1, borderColor: '#ccc', borderRadius: 8, paddingHorizontal: 15, marginBottom: 15 },
  button: { backgroundColor: '#A020F0', width: '100%', height: 50, borderRadius: 8, justifyContent: 'center', alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' }
});