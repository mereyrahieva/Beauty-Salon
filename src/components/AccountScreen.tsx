import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';

export default function AccountScreen({ navigation }: any) {
  const [cardNumber, setCardNumber] = useState('4400 4321 8899 5544');
  const [cardName, setCardName] = useState('RAKHIDOVA MEREY');
  const [expiry, setExpiry] = useState('12/29');

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerTitle}>Банковская карта 💳</Text>
      
      {/* ӘДЕМІ ВИРТУАЛДЫ КАРТА ДИЗАЙНЫ */}
      <View style={styles.bankCard}>
        <Text style={styles.bankName}>RM BANK</Text>
        <Text style={styles.cardNumberText}>{cardNumber || '•••• •••• •••• ••••'}</Text>
        <View style={styles.cardRow}>
          <View>
            <Text style={styles.cardLabel}>CARDHOLDER</Text>
            <Text style={styles.cardValue}>{cardName || 'YOUR NAME'}</Text>
          </View>
          <View>
            <Text style={styles.cardLabel}>EXPIRES</Text>
            <Text style={styles.cardValue}>{expiry || 'MM/YY'}</Text>
          </View>
        </View>
      </View>

      {/* ДЕРЕКТЕРДІ ӨЗГЕРТУ ӨРІСТЕРІ */}
      <View style={styles.form}>
        <Text style={styles.inputLabel}>Номер карты</Text>
        <TextInput style={styles.input} value={cardNumber} onChangeText={setCardNumber} placeholder="0000 0000 0000 0000" keyboardType="number-pad" maxLength={19} />

        <Text style={styles.inputLabel}>Имя владельца (латиницей)</Text>
        <TextInput style={styles.input} value={cardName} onChangeText={setCardName} placeholder="MEREY RAKHIDOVA" autoCapitalize="characters" />

        <Text style={styles.inputLabel}>Срок действия</Text>
        <TextInput style={styles.input} value={expiry} onChangeText={setExpiry} placeholder="MM/YY" maxLength={5} />
      </View>

      <TouchableOpacity style={styles.saveBtn} onPress={() => navigation.goBack()}>
        <Text style={styles.saveBtnText}>Сохранить карту</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAFAFA', padding: 20 },
  headerTitle: { fontSize: 22, fontWeight: 'bold', color: '#1A1A1A', marginTop: 40, marginBottom: 20, textAlign: 'center' },
  bankCard: { width: '100%', height: 200, backgroundColor: '#1A1A1A', borderRadius: 16, padding: 24, justifyContent: 'space-between', shadowColor: '#000', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.2, shadowRadius: 12, elevation: 5, marginBottom: 30 },
  bankName: { color: '#fff', fontSize: 18, fontWeight: 'bold', letterSpacing: 1 },
  cardNumberText: { color: '#fff', fontSize: 22, fontWeight: '600', letterSpacing: 2, marginVertical: 10, textAlign: 'center' },
  cardRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  cardLabel: { color: '#666', fontSize: 10, fontWeight: 'bold', marginBottom: 4 },
  cardValue: { color: '#fff', fontSize: 14, fontWeight: '500' },
  form: { backgroundColor: '#fff', padding: 20, borderRadius: 16, borderWidth: 1, borderColor: '#EAEAEA' },
  inputLabel: { fontSize: 14, fontWeight: '600', color: '#666', marginBottom: 6 },
  input: { width: '100%', height: 48, borderWidth: 1, borderColor: '#E5E5E5', borderRadius: 10, paddingHorizontal: 14, marginBottom: 16, fontSize: 16, color: '#000', backgroundColor: '#FAFAFA' },
  saveBtn: { backgroundColor: '#7B42F6', padding: 16, borderRadius: 14, alignItems: 'center', marginTop: 25, marginBottom: 40 },
  saveBtnText: { color: '#fff', fontSize: 16, fontWeight: 'bold' }
});