import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function CityScreen({ navigation }: any) {
  // Таңдалған қаланы сақтау
  const [selectedCity, setSelectedCity] = useState('');
  // Тізімнің ашылып-жабылуын бақылау (true - ашық, false - жабық)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Қазақстан қалаларының тізімі
  const cities = [
    'Алматы',
    'Астана',
    'Шымкент',
    'Караганда',
    'Актобе',
    'Тараз',
    'Павлодар',
    'Усть-Каменогорск',
    'Семей',
    'Атырау',
    'Кызылорда',
    'Костанай'
  ];

  // Қаланы таңдағанда орындалатын функция
  const handleSelectCity = (city: string) => {
    setSelectedCity(city);
    setIsDropdownOpen(false); // Қаланы таңдаған соң тізімді жабамыз
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Выберите город</Text>
      <Text style={styles.subtitle}>Заведения будут показываться вам исходя из вашего города</Text>
      
      {/* ҚАЛА ТАНДАУ ӨРІСІ (БАСҚАНДА ТІЗІМ АШЫЛАДЫ) */}
      <TouchableOpacity 
        style={styles.dropdownButton} 
        onPress={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <Text style={selectedCity ? styles.dropdownButtonText : styles.placeholderText}>
          {selectedCity ? selectedCity : 'Выбрать город...'}
        </Text>
        <Text style={styles.arrowIcon}>{isDropdownOpen ? '▲' : '▼'}</Text>
      </TouchableOpacity>

      {/* АШЫЛАТЫН ҚАЛАЛАР ТІЗІМІ (SCROLLVIEW АРҚЫЛЫ) */}
      {isDropdownOpen && (
        <View style={styles.dropdownMenu}>
          <ScrollView nestedScrollEnabled={true} style={{ maxHeight: 200 }}>
            {cities.map((city, index) => (
              <TouchableOpacity 
                key={index} 
                style={styles.dropdownItem} 
                onPress={() => handleSelectCity(city)}
              >
                <Text style={styles.dropdownItemText}>{city}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}

      {/* ПРОДОЛЖИТЬ БАТЫРМАСЫ */}
      <TouchableOpacity 
        style={[styles.button, !selectedCity && styles.buttonDisabled]} 
        onPress={() => selectedCity && navigation.navigate('Home')}
        disabled={!selectedCity} // Қала таңдалмаса, батырма басылмайды
      >
        <Text style={styles.buttonText}>Продолжить</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', backgroundColor: '#fff', padding: 24 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10, textAlign: 'center', color: '#1A1A1A' },
  subtitle: { fontSize: 14, color: '#666', textAlign: 'center', marginBottom: 30, paddingHorizontal: 10 },
  
  // Басты батырма (Dropdown сырты)
  dropdownButton: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', height: 54, borderWidth: 1, borderColor: '#E5E5E5', borderRadius: 12, paddingHorizontal: 16, backgroundColor: '#FAFAFA', marginBottom: 8 },
  dropdownButtonText: { fontSize: 16, color: '#000', fontWeight: '500' },
  placeholderText: { fontSize: 16, color: '#aaa' },
  arrowIcon: { fontSize: 12, color: '#666' },
  
  // Ішкі ашылатын меню
  dropdownMenu: { width: '100%', backgroundColor: '#fff', borderWidth: 1, borderColor: '#E5E5E5', borderRadius: 12, marginBottom: 20, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.05, shadowRadius: 8, elevation: 2, overflow: 'hidden' },
  dropdownItem: { width: '100%', paddingVertical: 14, paddingHorizontal: 16, borderBottomWidth: 1, borderBottomColor: '#F5F5F5' },
  dropdownItemText: { fontSize: 16, color: '#333' },
  
  // Төменгі "Продолжить" батырмасы
  button: { backgroundColor: '#7B42F6', width: '100%', height: 54, borderRadius: 12, justifyContent: 'center', alignItems: 'center', marginTop: 10 },
  buttonDisabled: { backgroundColor: '#C4B5FD' }, // Қала таңдалмағанда батырма сұр болып тұрады
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' }
});