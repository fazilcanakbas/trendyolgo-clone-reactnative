
import React ,{useState}from 'react';
import { View, Text,Dimensions,TextInput, TouchableOpacity } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import colors from '../../../colors'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const {width,height} = Dimensions.get('window');



interface Account {
  id: number  ;   
}

export default function UsersInfoScreen({ route }: { route: any }) {
  const { id, name, icon } = route.params.user;
  return (
    <View>
    <View style={{ backgroundColor: '#ffff' ,marginTop:-15,height:height*0.57 }}>
         

         {/* Kullanıcı Adı*/}
         <View style={{flexDirection:'row'}}>
                <View style={{paddingLeft:30,paddingTop:65}}>
                  <FontAwesome name="user" size={24} color={colors.turuncu} />
                </View>
                <View style={{ marginLeft: 18,marginTop:45, paddingTop: 60, borderWidth: 1.2, borderColor: '#737373', borderRadius: 5, width: 300,height:10 }}>
              {/* Etiket */}
              <Text style={{ position: 'absolute', left: 10, top: -10, backgroundColor: 'white', paddingHorizontal: 5, fontSize: 11.5 ,fontWeight:'bold',color:'#737373'}}>
                Ad Soyad
              </Text>
              {/* TextInput */}
              <TextInput
                style={{  position: 'absolute',
                  width: 250,
                  left: 10,
                  top: 10, 
                  backgroundColor: 'white',
                  paddingHorizontal: 5,
                  fontSize: 15,
                  fontWeight: '500',
                  color: 'black',
                  zIndex: 2, 
                }}
                placeholder="Kullanıcı Adı"
              />
              </View>         
           </View>

            {/* Kullanıcı Email*/}
           <View style={{flexDirection:'row',}}>
                <View style={{paddingLeft:30,paddingTop:30}}>
                  <FontAwesome name="envelope" size={24} color={colors.turuncu} />
                </View>
                <View style={{ marginLeft: 13,marginTop:15, paddingTop: 60, borderWidth: 1.2, borderColor: '#737373', borderRadius: 5, width: 300,height:10 }}>
              {/* Etiket */}
              {/* <Text style={{ position: 'absolute', left: 10, top: -10, backgroundColor: 'white', paddingHorizontal: 5, fontSize: 11.5 ,fontWeight:'bold',color:'#737373'}}>
                Ad Soyad
              </Text> */}
              {/* TextInput */}
              <TextInput
                style={{  position: 'absolute',
                  width: 250,
                  left: 10,
                  top: 10, 
                  backgroundColor: 'white',
                  paddingHorizontal: 5,
                  fontSize: 15,
                  fontWeight: '500',
                  color: 'black',
                  zIndex: 2, 
                }}
                placeholder="E-mail"
              />
              </View>         
           </View>



           <View style={{flexDirection:'row',}}>
                <View style={{paddingLeft:30,paddingTop:30}}>
                  <FontAwesome name="phone" size={24} color={colors.turuncu} />
                </View>
                <View style={{flexDirection:'row'}}>
                <View style={{ marginLeft: 19,marginTop:15, paddingTop: 60, borderWidth: 1.2, borderColor: '#737373', borderRadius: 5, width: 100,height:10 }}>
              {/* Etiket */}
              <Text style={{ position: 'absolute', left: 10, top: -10, backgroundColor: 'white', paddingHorizontal: 5, fontSize: 11.5 ,fontWeight:'bold',color:'#737373'}}>
                Ülke Kodu
              </Text>
              {/* TextInput */}
              <TextInput
                style={{  position: 'absolute',
                  width: 80,
                  left: 10,
                  top: 10, 
                  backgroundColor: 'white',
                  paddingHorizontal: 5,
                  fontSize: 15,
                  fontWeight: '500',
                  color: 'black',
                  zIndex: 2, 
                }}
                placeholder="+90"
              />
              </View>     
              <View style={{ marginLeft: 13,marginTop:15, paddingTop: 60, borderWidth: 1.2, borderColor: '#737373', borderRadius: 5, width: 188,height:10 }}>
              {/* Etiket */}
              <Text style={{ position: 'absolute', left: 10, top: -10, backgroundColor: 'white', paddingHorizontal: 5, fontSize: 11.5 ,fontWeight:'bold',color:'#737373'}}>
                 Cep Telefonu
              </Text>
              {/* TextInput */}
              <TextInput
                style={{  position: 'absolute',
                  width: 160,
                  left: 10,
                  top: 10, 
                  backgroundColor: 'white',
                  paddingHorizontal: 5,
                  fontSize: 15,
                  fontWeight: '500',
                  color: 'black',
                  zIndex: 2, 
                }}
                placeholder="Telefon Numarası" 
              />
              </View>     
              </View>    
           </View>
 

         <View style={{width:width*0.9,height:height*0.1,backgroundColor:'#fdefe4',marginTop:20,borderRadius:8,marginLeft:21,flexDirection:'row'}}>
                  <MaterialCommunityIcons name="information-outline" size={24} style={{
                    marginTop:25,
                    marginLeft:10
                  }}color={colors.turuncu}/>
                   <Text 
                   style={{width:width*0.75,fontSize:12,marginLeft:10,marginRight:7,marginTop:7,fontWeight:'500'}}>Kuryelerimiz verdiğiniz siparişler için adreslerin {} üzerindeki telefon numarasıyla iletişime geçer, bu {} sayfada gördüğünüz telefon numarası sadece üyelik içindir.</Text>
        </View>
        <TouchableOpacity>
        <View style={{width:width*0.9,height:height*0.063,backgroundColor:colors.turuncu,borderRadius:30,marginTop:20,justifyContent:'center',alignItems:'center',marginLeft:'auto',marginRight:'auto'}}>
              <Text style={{fontWeight:'bold',fontSize:16,color:'white'}}>Güncelle</Text>
        </View>
        </TouchableOpacity>



           
      
    </View>
    
    </View>
  );
}
