import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

export default function Index() {
  // Mutfak türlerini içeren bir dizi
  const kitchens = ['Pizza', 'Döner', 'Çiğ Köfte', 'Hamburger','Hamburger','Hamburger','Hamburger','Hamburger','Hamburger','Hamburger','Hamburger',];

  return (
    <View style={{
        backgroundColor:'#f5f5f5'
    }}>
      {/* Mutfaklar ve Tümünü Gör */}
      <View 
        style={{
          flexDirection: 'row',  // Yatay hizalama için
          justifyContent: 'space-between', // İki öğe arasına boşluk koyar
          alignItems: 'center', // Dikeyde hizalar
          marginHorizontal: 15, // Sağ ve sol kenardan boşluk
          marginTop: 10,         // Üst boşluk
        }}>
        <Text style={{
          fontSize: 15,
          fontWeight: 'bold',
        }}>Mutfaklar</Text>

        <TouchableOpacity>
          <Text style={{
            fontSize: 12,
            fontWeight: 'bold',
            color:'#ee7d1d'
          }}>Tümünü Gör</Text>
        </TouchableOpacity>
      </View>

      {/*Mutfaklar öğeleri */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{ flexDirection: 'row', marginTop: 8 }}>
          {/* kitchens dizisini map() ile dönüp öğeleri render ediyoruz */}
          {kitchens.map((kitchen, index) => (
            <View 
              key={index} // Her öğeye benzersiz bir 'key' ekliyoruz
              style={{
                backgroundColor: '#ffffff',
                width: 80,
                height: 109,
                alignItems: 'center',
                justifyContent: 'flex-end',
                borderRadius: 10,
                marginLeft: 10,
              }}>
              <Text style={{ marginBottom:15 }}>{kitchen}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
