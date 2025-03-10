import React from 'react'
import { View ,TextInput,Text,Dimensions} from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import colors from '../../../colors'
import Ionicons from '@expo/vector-icons/Ionicons';


const {width,height} = Dimensions.get('window');


export default function PasswordChangeScreen() {
  return (
    <View>

    <View style={{ backgroundColor: 'white' ,marginTop:-15,height:height*0.57 }}>
        {/*Şifre Değişikliği*/}
        <View>
          <View style={{flexDirection:'row',}}>
                
          <View style={{ marginLeft: 13,marginTop:30, paddingTop: 60, borderWidth: 1.2, borderColor: '#737373', borderRadius: 5, width: 350,height:10,alignItems:'center'}}>     
              {/* Etiket */}
              <TextInput
                style={{  position: 'absolute',
                  backgroundColor: 'white',
                  width: 280,
                  left: 10,
                  top: 10,
                  paddingHorizontal: 5,
                  fontSize: 15,
                  fontWeight: '500',
                  color: 'black',
                  zIndex: 2, 
                }}
                placeholder="Mevcut Şifre"
              />
              <Ionicons name="eye-off" size={24} color="black" />
            </View> 
            </View>
          <View></View>
          <View></View>
        </View>


         {/*Şifre Bilgileri*/}
        <View></View>


        {/*Buton-Güncelle*/}
        <View></View>


    </View>


    {/*2.Adımlı Doğrulama*/}
    <View>

    </View>


    </View>
  )
}
