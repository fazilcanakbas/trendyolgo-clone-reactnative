import React from 'react'
import { View ,Text,TouchableOpacity,StyleSheet,Image,ScrollView } from 'react-native'

export default function index() {
  return (
    <View>
      <View 
              style={{
                flexDirection: 'row',  // Yatay hizalama için
                justifyContent: 'space-between', // İki öğe arasına boşluk koyar
                alignItems: 'center', // Dikeyde hizalar
                marginHorizontal: 10, // Sağ ve sol kenardan boşluk
                marginTop: 13,         // Üst boşluk
              }}>
              <Text style={{
                fontSize: 16,
                fontWeight: 'bold',
              }}>Kampanyalar (11)</Text>
      
              <TouchableOpacity>
                <Text style={{
                  fontSize: 13,
                  fontWeight: 'bold',
                  color:'#ee7d1d'
                }}>Tümünü Gör</Text>
              </TouchableOpacity>
            </View>


              <View style={styles.container}>
                  <ScrollView 
                    horizontal 
                    showsHorizontalScrollIndicator={false} // Kaydırma çubuğunu gizler
                  
                  >
                    <Image
                      style={styles.image}
                      source={require('../../../assets/WhatsApp Görsel 2024-12-15 saat 03.19.21_655104dc.jpg')}
                    />
                    <Image
                      style={styles.image}
                      source={require('../../../assets/WhatsApp Görsel 2024-12-15 saat 03.16.00_f0ef6e3f.jpg')}
                    />
                    <Image
                      style={styles.image}
                      source={require('../../../assets/WhatsApp Görsel 2024-12-15 saat 03.19.21_90209dd8.jpg')}
                    />
                  </ScrollView>
                </View>
              
            
            
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop:50,
      position:'absolute',
     backgroundColor:'#f5f5f5'
  
    },
    image: {
     
      width: 337,
      height: 135,
      marginHorizontal: 5, // Resimler arasında boşluk bırakır
      borderRadius: 10, // Kenarları yuvarlatır
    },
  });