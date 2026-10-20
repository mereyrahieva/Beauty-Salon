import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function ProfileScreen({ navigation }: any) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.avatarRow}>
        <View style={styles.avatarPlaceholder}><Text style={{ fontSize: 32 }}>👑</Text></View>
        <View>
          <Text style={styles.profileName}>Рахидова Мерей</Text>
          <Text style={styles.profilePhone}>+7 (707) 777-8899</Text>
        </View>
      </View>

      {/* ЖАҢА КАРТА ПАПКАСЫНА (АККАУНТҚА) ӨТЕТІН БАТЫРМА */}
      <TouchableOpacity style={styles.accountMenuBtn} onPress={() => navigation.navigate('Account')}>
        <Text style={styles.accountMenuBtnText}>💳 Моя банковская карта и данные</Text>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>Мои активные записи в RM Beauty</Text>
      <View style={styles.orderHistoryCard}>
        <View>
          <Text style={styles.orderSoapName}>💇‍♀️ Стрижка у мастера Анны</Text>
          <Text style={styles.orderDate}>Время: Сегодня в 16:00</Text>
        </View>
        <Text style={styles.orderStatusDone}>Подтверждено</Text>
      </View>

      <TouchableOpacity style={styles.logoutBtn} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.logoutBtnText}>Выйти из аккаунта</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.backBtn} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.backBtnText}>⬅️ На главную салона</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAFAFA', padding: 20 },
  avatarRow: { flexDirection: 'row', alignItems: 'center', marginTop: 40, marginBottom: 20, backgroundColor: '#fff', padding: 15, borderRadius: 16, borderWidth: 1, borderColor: '#F0F0F0' },
  avatarPlaceholder: { width: 60, height: 60, borderRadius: 30, backgroundColor: '#F3EFFF', justifyContent: 'center', alignItems: 'center', marginRight: 15 },
  profileName: { fontSize: 18, fontWeight: 'bold', color: '#1A1A1A' },
  profilePhone: { fontSize: 14, color: '#666', marginTop: 2 },
  accountMenuBtn: { backgroundColor: '#fff', padding: 16, borderRadius: 12, borderWidth: 1, borderColor: '#7B42F6', marginBottom: 25, alignItems: 'center' },
  accountMenuBtnText: { color: '#7B42F6', fontWeight: 'bold', fontSize: 15 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#333', marginBottom: 15 },
  orderHistoryCard: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fff', padding: 15, borderRadius: 12, marginBottom: 12, borderWidth: 1, borderColor: '#EAEAEA' },
  orderSoapName: { fontSize: 15, fontWeight: '600', color: '#333' },
  orderDate: { fontSize: 12, color: '#999', marginTop: 4 },
  orderStatusDone: { color: '#7B42F6', fontWeight: 'bold', fontSize: 13 },
  logoutBtn: { backgroundColor: '#FFEDF0', padding: 16, borderRadius: 14, alignItems: 'center', marginTop: 40, width: '100%' },
  logoutBtnText: { color: '#E74C3C', fontWeight: 'bold', fontSize: 16 },
  backBtn: { padding: 15, alignItems: 'center', marginTop: 10, width: '100%' },
  backBtnText: { color: '#7B42F6', fontWeight: '600' }
});