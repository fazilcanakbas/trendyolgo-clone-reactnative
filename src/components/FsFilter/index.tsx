import React from 'react'
import { View ,Text} from 'react-native'
import Octicons from '@expo/vector-icons/Octicons';
import Feather from '@expo/vector-icons/Feather';

export default function index() {
  return (
    <View style={{
    flexDirection: 'row',
    paddingTop:3,
    padding: 20,
    gap: 13,
    shadowColor: 'black',
}}>
     {/* sırala/sort */}
        <View style={{
            width: 170,
            height: 36,
            borderRadius: 50,
            borderWidth: 1.4,
            borderColor: '#e3e3e3',
            flexDirection: 'row',
            justifyContent: 'center',  // Yatayda ortalama
            alignItems: 'center',      // Dikeyde ortalama
            paddingHorizontal: 5,      // İkon ve yazı arasındaki mesafeyi kontrol eder
        }}>
            <Octicons name="sort-desc" size={20} color="#ff8119" />
            <Text style={{ marginLeft: 5 ,color:'#353535',fontSize:15,fontWeight:'400'}}>Sırala</Text>  
        </View>
    {/* filtrele/filter */}
        <View style={{
            width:170,
            height:36,
            borderRadius:50,
            borderWidth:1.4,
            borderColor:'#e3e3e3',
            flexDirection: 'row',
            justifyContent: 'center',  // Yatayda ortalama
            alignItems: 'center',      // Dikeyde ortalama
            paddingHorizontal: 5,   
        }}>
         <Feather name="filter" size={20} color="#ff8119" />
          <Text style={{ marginLeft: 5 ,color:'#353535',fontSize:15,fontWeight:'400'}}>Filtrele</Text>  
        </View>

    </View>
  )
}
