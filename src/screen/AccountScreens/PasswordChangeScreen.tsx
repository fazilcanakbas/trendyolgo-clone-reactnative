import React, { useState } from 'react'
import { View ,TextInput,Text,Dimensions, TouchableOpacity} from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import colors from '../../../colors'
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';


const {width,height} = Dimensions.get('window');



export default function PasswordChangeScreen() {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <View>
     
     {/*Şifre Bilgiler-Güncelle Buton*/}
    <View style={{ backgroundColor: 'white' ,marginTop:-15,height:height*0.525 }}>
        {/*Şifre Değişikliği*/}
        <View>
          <View style={{flexDirection:'column',}}> 
            <View style={{ 
                flexDirection:'row',
                marginTop: 35, 
                paddingTop: 60, 
                borderWidth: 1.2, 
                borderColor: '#737373', 
                borderRadius: 12, 
                width: 350, 
                height: 50, 
                alignItems: 'center', 
                marginLeft: 'auto', 
                marginRight: 'auto', 
                position: 'relative'
              }}>     
                {/* Etiket */}
                <TextInput
                  style={{  
                    backgroundColor: 'white',
                    width: '70%',
                    marginTop:-60,
                    marginLeft:6,
                    paddingHorizontal: 10,
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: 'black',
                    zIndex:3
                  }}
                  placeholder="Mevcut Şifre"
                />
                <TouchableOpacity>
                <Ionicons 
                  name="eye-off" 
                  size={24} 
                  color="#737373" 
                  style={{ 
                    position: 'absolute', 
                    marginTop:-41,
                    marginLeft:65,
                    
                  }} 
                />
                </TouchableOpacity>
              </View>
            </View>

          <View>
            <View style={{ 
                flexDirection:'row',
                marginTop: 15, 
                paddingTop: 60, 
                borderWidth: 1.2, 
                borderColor: '#737373', 
                borderRadius: 12, 
                width: 350, 
                height: 50, 
                alignItems: 'center', 
                marginLeft: 'auto', 
                marginRight: 'auto', 
                position: 'relative'
              }}>     
                {/* Etiket */}
                <TextInput
                  style={{  
                    backgroundColor: 'white',
                    width: '70%',
                    marginTop:-60,
                    marginLeft:6,
                    paddingHorizontal: 10,
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: 'black',
                    zIndex:3
                  }}
                  placeholder="Yeni Şifre"
                />
                <TouchableOpacity>
                <Ionicons 
                  name="eye-off" 
                  size={24} 
                  color="#737373" 
                  style={{ 
                    position: 'absolute', 
                    marginTop:-41,
                    marginLeft:65,
                    
                  }} 
                />
                </TouchableOpacity>
              </View>
          </View>
          <View>
          <View style={{ 
                flexDirection:'row',
                marginTop: 15, 
                paddingTop: 60, 
                borderWidth: 1.2, 
                borderColor: '#737373', 
                borderRadius: 12, 
                width: 350, 
                height: 50, 
                alignItems: 'center', 
                marginLeft: 'auto', 
                marginRight: 'auto', 
                position: 'relative'
              }}>     
                {/* Etiket */}
                <TextInput
                  style={{  
                    backgroundColor: 'white',
                    width: '70%',
                    marginTop:-60,
                    marginLeft:6,
                    paddingHorizontal: 10,
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: 'black',
                    zIndex:3
                  }}
                  placeholder="Tekrar Yeni Şifre"
                />
                <TouchableOpacity>
                <Ionicons 
                  name="eye-off" 
                  size={24} 
                  color="#737373" 
                  style={{ 
                    position: 'absolute', 
                    marginTop:-41,
                    marginLeft:65,
                    
                  }} 
                />
                </TouchableOpacity>
              </View>
          </View>
        </View>


         {/*Şifre Bilgileri*/}
        <View style={{
          backgroundColor:'#f5f5f5',
          marginTop: 20, 
          paddingTop: 12, 
          borderRadius: 4, 
          width: 350, 
          height: 60, 
          alignItems: 'center', 
          marginLeft: 'auto', 
          marginRight: 'auto', 
        
        }} >
          <Text style={{
            fontSize: 11.5,
            fontWeight: '500',
            color: '#9e9e9e',

          }}> 
            Şifreniz en az 10 karakter ve en fazla 64 karakter olmalı, harf ve rakam içermelidir.
          </Text>

        </View>


        {/*Buton-Güncelle*/}
        <TouchableOpacity>
        <View style={{width:width*0.9,height:height*0.063,backgroundColor:colors.turuncu,borderRadius:30,marginTop:20,justifyContent:'center',alignItems:'center',marginLeft:'auto',marginRight:'auto'}}>
              <Text style={{fontWeight:'bold',fontSize:16,color:'white'}}>Güncelle</Text>
        </View>
        </TouchableOpacity>


    </View>


    {/*2.Adımlı Doğrulama*/}
    <View style={{ backgroundColor: 'white' ,marginTop:15,height:height*0.17 }}>
    <View style={{
          backgroundColor:'#fef1e8',
          marginTop: 20, 
          borderRadius: 4, 
          width: 350, 
          height: 100, 
          marginLeft: 'auto', 
          marginRight: 'auto', 
        
        }} >
          <View style={{flexDirection:'row',marginTop:8,flex:1}}>
          <Text style={{
            fontSize: 15.6,
            fontWeight: 'bold',
            color: colors.turuncu,
            marginLeft: 10,


          }}> 
           2 Adımlı Doğrulama
          </Text>

          <View style={{flexDirection:'row',marginLeft: 92, gap : 5}}>
            <TouchableOpacity onPress={() => setIsChecked(!isChecked)}>
      {isChecked ? (
        <Feather name="check-square" style={{ marginTop: -2 }} size={24} color={colors.turuncu} />
      ) : (
        <Feather name="square" style={{ marginTop: -2 }} size={24} color="black" />
      )}
            </TouchableOpacity>
            <Text style={{
            fontSize: 15.6,
            fontWeight: 'bold',
            color:'#252422'   }} >
              Etkinleştir
            </Text>
          </View>
          </View>
         
          <View style={{flexDirection:'row',marginLeft: 10,marginBottom:13}}>
          <Text style={{
            fontSize: 11.5,
            fontWeight: '500',
            color: '#5d5552',

          }}> 
           İki adımlı doğrulama yöntemini etkinleştirdiğinizde, kişisel şifrelerinize ek olarak kayıtlı cep telefonunuza gelen doğrulama koduyla oturum açarsınız.
          </Text>
          </View>

        </View>
    </View>


    </View>
  )
}
