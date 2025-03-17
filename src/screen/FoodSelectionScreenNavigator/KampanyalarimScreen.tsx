import React, { useState } from 'react';
import { View, Text,TouchableOpacity,Dimensions ,ScrollView,Animated} from 'react-native';
import colors from '../../../colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

const {width,height} = Dimensions.get('window');

export default function KampanyalarimScreen() {
  const [expanded, setExpanded] = useState(false);
  const [animation] = useState(new Animated.Value(0)); 
 
  const toggleExpand = () => {
    if (expanded) {
    
      Animated.timing(animation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start(() => setExpanded(false));
    } else {
      setExpanded(true);
    
      Animated.timing(animation, {
        toValue: 100, 
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  };



  return (
    <ScrollView style={{ flex: 1,}}>
      <TouchableOpacity onPress={toggleExpand}>
        <View style={{
          width: width,
          height: 60,
          backgroundColor: 'white',
          marginTop: 15,
          justifyContent: 'center',
          paddingLeft: 20,
        }}>
          <Text style={{ fontSize: 16.5, fontWeight: 'bold', color: '#f27a1b' }}>
            İndirim Kuponlarım (1)
          </Text>
          <Ionicons 
            name={expanded ? 'chevron-up' : 'chevron-down'} 
            size={20} 
            color={'#f27a1b'} 
            style={{ position: 'absolute', right: 20 }} 
          />
        </View>
      </TouchableOpacity>


      {expanded && (
        <Animated.View style={{
          backgroundColor: 'white',
          padding: 15,
          width: width - 40,
          alignSelf: 'center',
          marginTop: 5,
          borderRadius: 8,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 3,
          height: animation, 
          overflow: 'hidden'
        }}>
          <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#333' }}>
            🏷️ 50 TL Üzeri %10 İndirim!
          </Text>
          <Text style={{ fontSize: 12, color: '#666', marginTop: 5 }}>
            Bu kuponu kullanarak 50 TL üzeri alışverişlerinizde %10 indirim kazanabilirsiniz.
          </Text>
        </Animated.View>
      )}


      <View style={{flexDirection:'column',gap:23}} >
        <Text style={{fontSize:17,fontWeight:'bold',marginLeft:20,marginTop:20}}>
          Tüm Kampanyalar (5)
        </Text>
        <View style={{flexDirection:'row',justifyContent:'space-around'}}>
        <View style={{width:width*0.455,height:250,backgroundColor:'red', borderRadius:15,
        }}>
          <View style={{height:200,backgroundColor:'blue',borderTopLeftRadius:15,borderTopRightRadius:15}}>

          </View>

        </View>
        <View style={{width:width*0.455,height:250,backgroundColor:'red', borderRadius:15,
        }}>
          <View style={{height:200,backgroundColor:'blue',borderTopLeftRadius:15,borderTopRightRadius:15}}>

          </View>

        </View>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-around'}}>
        <View style={{width:width*0.455,height:250,backgroundColor:'red', borderRadius:15,
        }}>
          <View style={{height:200,backgroundColor:'blue',borderTopLeftRadius:15,borderTopRightRadius:15}}>

          </View>

        </View>
        <View style={{width:width*0.455,height:250,backgroundColor:'red', borderRadius:15,
        }}>
          <View style={{height:200,backgroundColor:'blue',borderTopLeftRadius:15,borderTopRightRadius:15}}>

          </View>

        </View>
        
        </View>
        <View style={{flexDirection:'row',marginLeft:10,marginBottom:10}}>
        <View style={{width:width*0.455,height:250,backgroundColor:'red', borderRadius:15,
        }}>
          <View style={{height:200,backgroundColor:'blue',borderTopLeftRadius:15,borderTopRightRadius:15}}>

          </View>

        </View>
        
        </View>
       
      </View>
    </ScrollView>
  );
}