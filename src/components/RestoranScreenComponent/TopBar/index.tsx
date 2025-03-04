import { AntDesign, Entypo, Feather, FontAwesome, FontAwesome6, Fontisto, Ionicons } from '@expo/vector-icons'
import React from 'react'
import { ScrollView, TouchableOpacity, View ,Text ,Dimensions,Image} from 'react-native'


const { width, height } = Dimensions.get('window')



export default function index() {
  return (
          
      <ScrollView 
      contentContainerStyle={{ flexGrow: 1 ,backgroundColor:'white'}} 
      >
       <View style={{flex:1,backgroundColor:'white'}}>
      
          {/* Turuncu Kısım */}
          <View style={{ height:height*0.145, backgroundColor: '#f27a1b' }}>
      
            {/* Üst Bar [Geri Buton - Restoran Adı - Hakkında Bildir] */}
            <View style={{backgroundColor:'#f87d1d',height:50,flexDirection:'row',alignItems:'center'}}>

            {/*Geri Butonu */}
              <View style={{marginLeft:10}}>
              <TouchableOpacity>
                <Ionicons name="arrow-back-outline" size={24} color="white"/>
              </TouchableOpacity>
              </View>
            
      
            {/* Restoran Adı */}
            <View style={{}}>
                <Text style={{
                      color:'white',
                      fontSize:16,
                      fontWeight:'500',
                      marginLeft:10
                }}>Dodo Pizza (Kültür)</Text>
              </View>
      
              {/* Hakkında-Bildir Buton */}
              <View style={{position:'absolute',right:20,flexDirection:'row',justifyContent:'space-between',width:70}}>
               <TouchableOpacity>
                <Ionicons name="information-circle" size={26} color="white"/>
                <Text style={{color:'white',fontSize:8,fontWeight:'500',right:4}}>Hakkında</Text>
               </TouchableOpacity>
               <TouchableOpacity>
               <Entypo name="warning" size={26} color="white" />
                <Text style={{color:'white',fontSize:8,fontWeight:'500',left:4}}>Bildir</Text>
               </TouchableOpacity>
               </View>{/* Hakkında-Bildir Buton Bitiş */}
      
            </View> {/* Üst Bar Bitiş */}
      
          {/* Search Button */}
            <View>
              <TouchableOpacity>
              <View style={{
                backgroundColor: 'white',
                width: width*0.91,
                height: 41,
                borderRadius: 50,
                marginHorizontal: 23,
                marginTop: 8,
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 10,
                marginLeft:20
              }}>
                <Feather name="search" size={24} color="#f27a1b" />
                <Text style={{
                  marginLeft: 10,
                  fontSize: 16,
                  fontWeight: '600',
                  color: '#666666'
                }}>Bu Restoranda Ara</Text>
              </View>
            </TouchableOpacity>
            </View> {/* Search Button Bitiş */}

          </View>{/* Turuncu Kısım Bitiş */}




      
          </View>{/* Ana View  Bitiş */}



       
       
      </ScrollView>
  )
}
