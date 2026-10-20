import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function ProductDetailScreen({ route, navigation }: any) {
  const serviceName = route?.params?.serviceName || 'Стрижка & Стилизация';
  const servicePrice = route?.params?.servicePrice || '8 000 ₸';
  const serviceIcon = route?.params?.serviceIcon || '💇‍♀️';

  const [selectedMaster, setSelectedMaster] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  // ӘР СЕРВИСКЕ ӘРТҮРЛІ МАСТЕРЛЕРДІ БӨЛУ ЛОГИКАСЫ (ҚАЙТАЛАНБАЙДЫ)
  const getMastersByService = (name: string) => {
    if (name.includes('Маникюр') || name.includes('Педикюр')) {
      return ['Айару (Ногтевой Топ)', 'Камила (Nail Pro)', 'Алина (Эстетист)'];
    }
    if (name.includes('макияж') || name.includes('Макияж')) {
      return ['Зарина (Топ-Визажист)', 'Мадина (MakeUp Expert)', 'Айша (Стилист)'];
    }
    return ['Анна (Топ-Парикмахер)', 'Диана (Стилист волос)', 'Кристина (Колорист)'];
  };

  const masters = getMastersByService(serviceName);
  const timeSlots = ['10:00', '12:00', '14:00', '16:00', '18:00', '20:00'];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageBig}><Text style={{ fontSize: 60 }}>{serviceIcon}</Text></View>
      <View style={styles.infoBox}>
        <Text style={styles.title}>{serviceName}</Text>
        <Text style={styles.price}>{servicePrice}</Text>
        
        <Text style={styles.descriptionTitle}>1. Выберите мастера:</Text>
        <View style={styles.selectionRow}>
          {masters.map(m => (
            <TouchableOpacity key={m} style={[styles.selectCard, selectedMaster === m && styles.selectedCard]} onPress={() => setSelectedMaster(m)}>
              <Text style={[styles.selectText, selectedMaster === m && { color: '#fff' }]}>{m}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.descriptionTitle}>2. Выберите свободное время:</Text>
        <View style={styles.timeGrid}>
          {timeSlots.map(t => (
            <TouchableOpacity key={t} style={[styles.timeCard, selectedTime === t && styles.selectedCard]} onPress={() => setSelectedTime(t)}>
              <Text style={[styles.timeText, selectedTime === t && { color: '#fff' }]}>{t}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* СІЗ СҰРАҒАН "ПОДТВЕРДИТЬ ЗАПИСЬ" БАТЫРМАСЫ */}
        <TouchableOpacity 
          style={[styles.cartBtn, (!selectedMaster || !selectedTime) && styles.disabledBtn]} 
          onPress={() => navigation.navigate('Cart', { serviceName, servicePrice, selectedMaster, selectedTime })}
          disabled={!selectedMaster || !selectedTime}
        >
          <Text style={styles.cartBtnText}>
            {selectedMaster && selectedTime ? 'Подтвердить запись ➡️' : 'Выберите мастера и уақыт'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Text style={styles.backBtnText}>⬅️ Назад к услугам</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F3EFFF' },
  imageBig: { height: 160, justifyContent: 'center', alignItems: 'center' },
  infoBox: { flex: 1, backgroundColor: '#fff', borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 25 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#1A1A1A', marginBottom: 8 },
  price: { fontSize: 22, fontWeight: 'bold', color: '#7B42F6', marginBottom: 20 },
  descriptionTitle: { fontSize: 16, fontWeight: 'bold', color: '#333', marginTop: 12, marginBottom: 8 },
  selectionRow: { marginBottom: 10 },
  selectCard: { padding: 12, borderRadius: 10, backgroundColor: '#F5F5F5', marginBottom: 8, borderWidth: 1, borderColor: '#E0E0E0' },
  timeGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 25 },
  timeCard: { width: '30%', padding: 10, borderRadius: 8, backgroundColor: '#F5F5F5', alignItems: 'center', borderWidth: 1, borderColor: '#E0E0E0' },
  selectedCard: { backgroundColor: '#7B42F6', borderColor: '#7B42F6' },
  selectText: { color: '#333', fontSize: 14 },
  timeText: { color: '#333', fontSize: 14, fontWeight: 'bold' },
  cartBtn: { backgroundColor: '#7B42F6', padding: 16, borderRadius: 14, alignItems: 'center', marginBottom: 12 },
  disabledBtn: { backgroundColor: '#C4B5FD' },
  cartBtnText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  backBtn: { padding: 10, alignItems: 'center', marginBottom: 30 },
  backBtnText: { color: '#666', fontSize: 14 }
});