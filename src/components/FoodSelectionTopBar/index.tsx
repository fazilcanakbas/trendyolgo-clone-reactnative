import React from 'react'
import { Dimensions, View ,Text,TouchableOpacity} from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
import Ionicons from '@expo/vector-icons/Ionicons';;
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Feather from '@expo/vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

const {width,height} = Dimensions.get('window')


export default function Index() {
  const navigation = useNavigation<StackNavigationProp<any>>();
  return (
    <View>
        <View style={{
            flexDirection:'row',
            paddingTop:10, 
        }}>
        {/* Close */}
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
        <View style={{
            marginLeft:15,
            marginTop:8
        }}><AntDesign name="close" size={30} color="#979797" />
        </View>
        </TouchableOpacity>
         
       
         {/*Address */}
        <View 
        style={{
        width: width*0.53,
        height: 40,
        backgroundColor: '#fdefe4',
        borderRadius: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 'auto',
        borderWidth:1.5,
        borderColor:'#eb9548',
        marginLeft:25
      }}>
        <FontAwesome6 name="location-dot" size={20} color="#f27a1b" style={{ marginLeft: 13 }} />
        <View style={{ flex: 1, marginLeft: 10 }}>
          <Text style={{ fontSize: 11, color: '#999999' ,fontWeight:'500'}}>Teslimat Adresi</Text>
          <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#323335' }}>Üniversite (Pınarbaşı Mah)</Text>
        </View>
        <AntDesign name="caretdown" size={10} color="#f27a1b" style={{ marginRight: 8}} />
        </View>

        {/* asistan */}
        <TouchableOpacity>
            <View style={{
                marginRight:60,
                justifyContent:'center',
                alignItems:'center'
            }}>
            <Ionicons name="chatbox-ellipses" size={28} color="#949494" />
            <Text style={{
                fontSize:10,
                fontWeight:'bold',
                color:"#949494"
            }}>Asistan</Text>
            </View>
        </TouchableOpacity>

        {/* kupon/ticket */}
        <TouchableOpacity>
            <View>
            <MaterialCommunityIcons style={{
            marginLeft:-49,
            marginTop:-2
            }} name="ticket-percent" size={29} color="#949494" />
            <Text style={{
                fontSize:10,
                fontWeight:'bold',
                color:"#949494",
                marginTop:1.1,
                marginLeft:-52,
            }}>Kuponlar</Text>
            </View>
        </TouchableOpacity>
        
        </View>

        {/* Search Button */}
        <View>
            <TouchableOpacity>
            <View style={{
            backgroundColor: '#e8e6e6',
            width: width*0.91,
            height: 41,
            borderRadius: 50,
            marginHorizontal: 23,
            marginTop: 18,
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 10,
            marginLeft:20,
            marginBottom:10
            }}>
            <Feather name="search" size={24} color="#f27a1b" />
            <Text style={{
                marginLeft: 15,
                fontSize: 16,
                fontWeight: '600',
                color: '#959595'
            }}>Restoran, ürün veya mutfak ara</Text>
            </View>
        </TouchableOpacity>
        </View>




    </View>
  )
}
