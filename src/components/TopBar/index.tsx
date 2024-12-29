import React from 'react';
import { View, Image, Text, TouchableOpacity, Dimensions } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';

const {width,height} =Dimensions.get('window')

function Index() {
  return (
    <View style={{ height:height*0.158, backgroundColor: '#f27a1b' }}>
      {/* Logo */}
      <View style={{marginTop:2,marginLeft:10  }}>
        <Image
          style={{ width: width*0.18, height: 60 }}
          source={require('../../../assets/trednyolGologo.png')}
        />
      </View>

      {/* Delivery Address */}
      <View style={{
        width: width*0.53,
        height: 40,
        backgroundColor: '#fdefe4',
        borderRadius: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 'auto',
        marginTop: -48
      }}>
        <FontAwesome6 name="location-dot" size={20} color="#f27a1b" style={{ marginLeft: 13 }} />
        <View style={{ flex: 1, marginLeft: 10 }}>
          <Text style={{ fontSize: 11, color: '#999999' ,fontWeight:'500'}}>Teslimat Adresi</Text>
          <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#323335' }}>Üniversite (Pınarbaşı Mah)</Text>
        </View>
        <AntDesign name="caretdown" size={10} color="#f27a1b" style={{ marginRight: 8}} />
      </View>

      {/* Notifications */}
      <TouchableOpacity style={{ position: 'absolute', top: 15, right: 12, alignItems: 'center' }}>
        <Ionicons name="notifications" size={24} color="white" />
        <Text style={{ color: 'white', fontSize: 11 }}>Bildirimler</Text>
      </TouchableOpacity>

      {/* Search Button */}
      <TouchableOpacity>
        <View style={{
          backgroundColor: 'white',
          width: width*0.91,
          height: 41,
          borderRadius: 50,
          marginHorizontal: 23,
          marginTop: 18,
          flexDirection: 'row',
          alignItems: 'center',
          paddingLeft: 10,
          marginLeft:20
        }}>
          <Feather name="search" size={24} color="#f27a1b" />
          <Text style={{
            marginLeft: 15,
            fontSize: 16,
            fontWeight: '600',
            color: '#666666'
          }}>Çorba ara</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default Index;
