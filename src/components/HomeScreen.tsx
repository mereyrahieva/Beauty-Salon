import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }: any) {
  // Активті категорияны сақтау (По умолчанию 'Все')
  const [activeCategory, setActiveCategory] = useState('Все');

  // Қызметтер тізімі (Категория бойынша фильтрленеді)
  const services = [
    { id: 1, name: 'Стрижка & Стилизация', price: '8 000 ₸', icon: '💇‍♀️', category: 'Волосы' },
    { id: 2, name: 'Окрашивание волос', price: '15 000 ₸', icon: '🎨', category: 'Волосы' },
    { id: 3, name: 'Маникюр + Гель-лак', price: '6 500 ₸', icon: '💅', category: 'Ногти' },
    { id: 4, name: 'Педикюр премиум', price: '10 000 ₸', icon: '🦶', category: 'Ногти' },
    { id: 5, name: 'Дневной макияж', price: '12 000 ₸', icon: '💄', category: 'Макияж' },
    { id: 6, name: 'Вечерний макияж', price: '18 000 ₸', icon: '👁️', category: 'Макияж' },
  ];

  // Категория бойынша сүзу
  const filteredServices = activeCategory === 'Все' 
    ? services 
    : services.filter(s => s.category === activeCategory);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcome}>Добро пожаловать в</Text>
        <Text style={styles.brandTitle}>RM Beauty Salon ✨</Text>
      </View>

      <Text style={styles.sectionTitle}>Категории услуг</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categories}>
        {['Все', 'Волосы', 'Ногти', 'Макияж'].map((cat) => (
          <TouchableOpacity 
            key={cat}
            style={[styles.categoryCard, activeCategory === cat && { backgroundColor: '#7B42F6' }]}
            onPress={() => setActiveCategory(cat)}
          >
            <Text style={[styles.categoryText, activeCategory === cat && { color: '#fff' }]}>{cat}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Text style={styles.sectionTitle}>Популярные услуги</Text>
      <View style={styles.productGrid}>
        {filteredServices.map((service) => (
          <TouchableOpacity 
            key={service.id} 
            style={styles.productCard} 
            onPress={() => navigation.navigate('ProductDetail', { serviceName: service.name, servicePrice: service.price, serviceIcon: service.icon })}
          >
            <View style={styles.imagePlaceholder}><Text style={{fontSize: 28}}>{service.icon}</Text></View>
            <Text style={styles.productName}>{service.name}</Text>
            <Text style={styles.productPrice}>{service.price}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.profileBtn} onPress={() => navigation.navigate('Profile')}>
        <Text style={styles.profileBtnText}>👤 Профиль и Мои записи</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAFAFA', padding: 20 },
  header: { marginTop: 40, marginBottom: 20 },
  welcome: { fontSize: 16, color: '#666' },
  brandTitle: { fontSize: 26, fontWeight: 'bold', color: '#1A1A1A' },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginVertical: 15, color: '#333' },
  categories: { flexDirection: 'row', marginBottom: 20 },
  categoryCard: { paddingHorizontal: 18, paddingVertical: 10, borderRadius: 20, backgroundColor: '#EAEAEA', marginRight: 10 },
  categoryText: { color: '#555', fontWeight: '600' },
  productGrid: { flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap' },
  productCard: { width: '48%', backgroundColor: '#fff', padding: 12, borderRadius: 16, marginBottom: 15, borderWidth: 1, borderColor: '#F0F0F0' },
  imagePlaceholder: { width: '100%', height: 120, backgroundColor: '#F3EFFF', borderRadius: 12, justifyContent: 'center', alignItems: 'center', marginBottom: 10 },
  productName: { fontSize: 14, fontWeight: '600', color: '#333', marginBottom: 4 },
  productPrice: { fontSize: 16, fontWeight: 'bold', color: '#7B42F6' },
  profileBtn: { marginVertical: 30, backgroundColor: '#fff', borderWidth: 1, borderColor: '#7B42F6', padding: 15, borderRadius: 12, alignItems: 'center', width: '100%' },
  profileBtnText: { color: '#7B42F6', fontWeight: 'bold' }
});