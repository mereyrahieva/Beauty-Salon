import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App'; // Сіз айтқан дұрыс жол!

type NavigationProp = StackNavigationProp<RootStackParamList, 'VerifyCode'>;

export default function VerifyCodeScreen({ navigation }: { navigation: NavigationProp }) {
  const [code, setCode] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Подтвердить номер</Text>
      <Text style={styles.subtitle}>Мы отправили четырехзначный код</Text>
      
      <TextInput 
        placeholder="0 0 0 0" 
        value={code} 
        onChangeText={setCode} 
        keyboardType="number-pad" 
        maxLength={4} 
        style={[styles.input, { textAlign: 'center', fontSize: 20 }]} 
      />
      
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ResetPassword')}>
        <Text style={styles.buttonText}>Подтвердить</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 14, color: '#666', marginBottom: 30 },
  input: { width: '60%', height: 50, borderWidth: 1, borderColor: '#ccc', borderRadius: 8, marginBottom: 15 },
  button: { backgroundColor: '#A020F0', width: '100%', height: 50, borderRadius: 8, justifyContent: 'center', alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' }
});