import React from 'react'
import { View,Text,ScrollView,TouchableOpacity,Image } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Fontisto from '@expo/vector-icons/Fontisto';



const restaurants =[
  { image:  require('../../../assets/firsat1.jpg')},
  { image:  require('../../../assets/firsat3.jpg')},
   { image:  require('../../../assets/firsat22.jpg')},
   { image:  require('../../../assets/firsat4.jpg')},
]



export default function index() {
  return (
    <View>
     {/* öne çıkan fırsatlar */}
    <View 
    style={{
        flexDirection:'row',
        paddingTop:10,
        alignItems:'center',
        marginHorizontal: 10, // Sağ ve sol kenardan boşluk
    }}>
        <Text style={{
            fontSize:15,
            fontWeight:'bold',
        }}>Öne Çıkan Fırsatlar</Text>
       
    </View>
     <ScrollView
     horizontal
     showsHorizontalScrollIndicator={false} >
    {restaurants.map((restaurant, index) => (
      <TouchableOpacity>
        <View 
          key={index}
          style={{
           
           
            
           borderRadius:10,
            marginTop: 10,
            marginLeft: 7,
            marginRight:3,
            marginBottom:20,
          }}> 
         
          <Image 
            source={restaurant.image}
            style={{
              width: 150,
              height: 150,
              borderRadius:10
            }} 
            resizeMode="cover"
          />
      
        </View>
      </TouchableOpacity>
      ))}
      </ScrollView>
    </View>
  );
}
