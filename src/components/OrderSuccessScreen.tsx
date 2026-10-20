import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function OrderSuccessScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.iconCircle}>
        <Text style={styles.icon}>💖</Text>
      </View>
      
      <Text style={styles.title}>Вы успешно записаны!</Text>
      <Text style={styles.subtitle}>
        Ждем вас в назначенное время. Мы отправим вам SMS-напоминание за 2 часа до начала процедуры.
      </Text>

      <TouchableOpacity 
        style={styles.homeBtn} 
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.homeBtnText}>На главную страницу</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 25, justifyContent: 'center', alignItems: 'center' },
  iconCircle: { width: 100, height: 100, borderRadius: 50, backgroundColor: '#F3EFFF', justifyContent: 'center', alignItems: 'center', marginBottom: 24 },
  icon: { fontSize: 45 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#1A1A1A', marginBottom: 12, textAlign: 'center' },
  subtitle: { fontSize: 15, color: '#666', textAlign: 'center', lineHeight: 22, paddingHorizontal: 15, marginBottom: 40 },
  homeBtn: { backgroundColor: '#7B42F6', width: '100%', height: 54, borderRadius: 14, justifyContent: 'center', alignItems: 'center' },
  homeBtnText: { color: '#fff', fontSize: 16, fontWeight: 'bold' }
});