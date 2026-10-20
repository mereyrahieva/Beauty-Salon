import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function CartScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Подтверждение записи</Text>

      <View style={styles.cartItem}>
        <Text style={styles.itemName}>💇‍♀️ Стрижка у мастера Анны</Text>
        <Text style={styles.itemPrice}>8 000 ₸</Text>
      </View>

      <View style={styles.dateTimeBox}>
        <Text style={styles.dateText}>
          📅 Дата: <Text style={{ fontWeight: 'bold' }}>Завтра, 14:00</Text>
        </Text>
      </View>

      <View style={styles.totalBox}>
        <Text style={styles.totalText}>Итого к оплате в салоне:</Text>
        <Text style={styles.totalPrice}>8 000 ₸</Text>
      </View>

      <TouchableOpacity 
        style={styles.orderBtn} 
        onPress={() => navigation.navigate('OrderSuccess')}
      >
        <Text style={styles.orderBtnText}>Подтвердить запись 🚀</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 25, justifyContent: 'center' },
  headerTitle: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 40 },
  cartItem: { flexDirection: 'row', justifyContent: 'space-between', padding: 15, backgroundColor: '#FAFAFA', borderRadius: 12, marginBottom: 15, borderWidth: 1, borderColor: '#ECECEC' },
  itemName: { fontSize: 15, color: '#333' },
  itemPrice: { fontSize: 16, fontWeight: 'bold', color: '#7B42F6' },
  dateTimeBox: { padding: 15, backgroundColor: '#F3EFFF', borderRadius: 12, marginBottom: 20 },
  dateText: { color: '#7B42F6', fontSize: 15 },
  totalBox: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20, borderTopWidth: 1, borderColor: '#EEE', paddingTop: 15 },
  totalText: { fontSize: 16, color: '#666' },
  totalPrice: { fontSize: 22, fontWeight: 'bold', color: '#1A1A1A' },
  orderBtn: { backgroundColor: '#7B42F6', padding: 16, borderRadius: 14, alignItems: 'center', marginTop: 20, width: '100%' },
  orderBtnText: { color: '#fff', fontSize: 16, fontWeight: 'bold' }
});