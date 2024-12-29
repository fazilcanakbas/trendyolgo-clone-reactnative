import React, { useEffect, useState } from 'react';
import { View, Dimensions,Text,Image ,TouchableOpacity,StyleSheet, Animated, ScrollView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AntDesign from '@expo/vector-icons/AntDesign';
const { width, height } = Dimensions.get('window');
import Entypo from '@expo/vector-icons/Entypo';
import Octicons from '@expo/vector-icons/Octicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';



const rewards = [
  { id: 1, label: '1. Yedikçe İndirim \n Kuponu (50 TL)', threshold: 100,  },
  { id: 2, label: '2. Yedikçe İndirim \n Kuponu (50 TL)', threshold: 200, color: 'gray' },
  { id: 3, label: '3. Yedikçe İndirim  \n Kuponu (50 TL)', threshold: 300,  },
  { id: 4, label: '4. Yedikçe İndirim  \n Kuponu (50 TL)', threshold: 600, color: 'gray' },
  { id: 4, label: 'GoPlus Özel   \n Restoran İndirimleri \n  (100 TL)', threshold: 1000, color: 'gray' },
  { id: 4, label: '5. Yedikçe İndirim  \n Kuponu (75 TL)', threshold: 1600, color: 'gray' },
  { id: 4, label: 'Markette Ücretsiz   \n Teslimat (3 Sipariş)', threshold: 2000, color: 'gray' },
  { id: 4, label: 'Yemek veya Hızlı   \n Markette Geçerli \n 150 TL İndirim ', threshold: 3000, color: 'gray' },
];


function index() {
  return (
    <View >
    <View
      style={{
        flex: 0.7,
        backgroundColor: '#ffffff', // İlk view sabit renk
        width: width * 0.93,
        height: height * 0.33,
        marginLeft:15,
        borderRadius: 15,
        marginTop: 177,
      
        // shadowRadius: 10,  // Gölge bulanıklığı
        // shadowOpacity: 100,  // Gölgenin şeffaflığı
        // shadowColor: '#e21706',  // Gölgenin rengi
        // shadowOffset: { width: 0, height: 0},  // Gölgenin kayması (X ve Y yönü)
        // elevation: 5,  // Android için gölge
        
      }}
    >
      {/* goplus kısmı 4 ün 1 i */}
      <LinearGradient
      colors={['#ef7716', '#e21706']} // Gradient renkleri
      start={{ x: 0, y: 0 }} // Sağdan başlayacak
      end={{ x: 1, y: 0 }} // Sola doğru gidecek
        style={{
          height: 37,
          borderTopRightRadius: 15,
          borderTopLeftRadius: 15,
        }}>
        <View
        
          style={{
            height: 37,
            borderTopRightRadius: 15,
            borderTopLeftRadius: 15,
          }}>
             <TouchableOpacity>
            <Text style={{
              color:'white',
              marginLeft:273,
              marginTop:12,
              fontSize:10.5,
              fontWeight:'bold' 
            }}>Detayları Gör</Text>
            
            <View>
              <Entypo style={{
              marginLeft:335,
              marginTop:-16.5
            }} name="chevron-small-right" size={20} color="white" />
             </View>
            </TouchableOpacity>
           
            <Image
            style={{
              marginTop:-23,
              marginLeft:12
              
            }}
            source={require('../../../assets/gopluslogo.png')}
            />
            <View
              style={{
                backgroundColor: 'white',
                width: 40,
                height: 17,
                marginLeft: 80,
                marginTop: -19.5,
                borderRadius: 10,
                flexDirection: 'row',  
                alignItems: 'center',  
              }}
              >
              <Text
                style={{
                  fontSize:11,
                  fontWeight: 'bold',
                  color: '#d60606',
                  marginLeft:7
                }}
              >
                YENİ
              </Text>
            </View>
          </View>
      </LinearGradient>
     
     {/* puan kısmı 4 ün 2si  */}

     <View
     style={{
      flex:0.22,
      // backgroundColor:'blue'
     }}>
      <View style={{
        marginTop:40
      }}>
      <MaterialIcons style={{
        marginTop:-28,
        marginLeft:10
      }}name="pentagon" size={30} color="#f42e11" />
      <AntDesign style={{
        marginTop:-18,
        marginLeft:17.5
      }} name="star" size={15} color="white" />
      </View>
 
        <Text style={{marginLeft:45,marginTop:-28,fontSize:15,fontWeight:'bold',color:'#353535'}}>Puanın:</Text>
        <Text style={{marginLeft:100,marginTop:-20.5,fontSize:15,fontWeight:'600',color:'#ee7b22'}}>0</Text>
        <Text style={{marginLeft:45,marginTop:-1,fontSize:9,fontWeight:'bold',color:'#a1a1a1'}}>Sonraki Ödüle 100 puan kaldı.</Text>
       <TouchableOpacity>
        <Text style={{marginLeft:228,marginTop:-25,fontSize:12,fontWeight:'bold',color:'#db7a29'}}>Nasıl Puan Kazanırım?</Text>
       </TouchableOpacity>


     </View>


   {/* puan slider  4 ün 3 ü  */}
   <View>
          <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false} // Kaydırma çubuğunu gizler
          >
          <View style={styles.rewardContainer}>
            {rewards.map((reward, index) => (
             <View key={reward.id} style={styles.reward}>
             {/* İlk ikon için sol çubuk */}
             {index === 0 && <View style={[styles.progressBar, styles.progressBarLeft]} />}
           
             <Text style={styles.rewardText}>{reward.threshold}</Text>
           
             {/* İkon */}
             <View style={styles.icon}>
               <FontAwesome6 name="gift" size={24} color="#737373" />
             </View>
           
             {/* Sağ çubuk - Son ikonda çizilmez */}
             {index !== rewards.length - 1 && (
               <View style={[styles.progressBar]} />
             )}
           
             <Text style={styles.rewardLabel}>{reward.label}</Text>
           </View>

            ))}
          </View>
          </ScrollView>
    </View>
   
    {/* bilgilendirme  4 ün 4 ü  */}
    <View>
      <View style={{
        paddingLeft:10,
        paddingTop:20
      }}>
      <MaterialCommunityIcons name="information-outline" size={21} color="#d48038" />
      </View>
      <View>
      <Text style={{ fontSize: 10.5, fontWeight: 'bold', marginLeft: 40, marginTop: -24 ,color:'#666666'}}>
        Puanlar ve ödüller{' '}
        <Text style={{ color: '#343434' }}>1 Aralık-31 Aralık</Text>
        {' '}arasında geçerlidir ve {' '}
        <Text style={{ color: '#343434' }}>her ay yenilenir.</Text>
        {' '}
      </Text>
    </View>

    </View>



    </View>
    </View>
  );
}






















const styles = StyleSheet.create({
  rewardContainer: {
    marginLeft:10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 42,
    gap:12.5
  },
  reward: {
    alignItems: 'center',
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginTop: 5,
    marginLeft:16,
  },
  progressBar: {
    width: 100, // Çubuk genişliği
    height: 4, // Çubuk yüksekliği
    backgroundColor: '#d3d3d3', // Boş çubuk rengi
    position: 'absolute',
    left: 50, // İkonun bitişine göre ayarlama
    top: 48, // Çubuğun dikey konumu
    zIndex: -1, // Çubuğu ikonların altına al
    borderRadius:5
  },
  progressBarLeft: {
    width: 100, // Sol çubuk genişliği
    left: -8, // Sol tarafa kaydır
  },
  rewardText: {
    fontSize:12.5,
    marginTop:12,
    fontWeight: 'bold',
  },
  rewardLabel: {
    textAlign: 'center',
    fontSize: 9.8,
    fontWeight:'800',
    color:'#393939',
    marginTop:-5,
  },
});


export default index;
