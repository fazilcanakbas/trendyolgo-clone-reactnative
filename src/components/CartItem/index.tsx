import React from 'react';
import { View, TouchableOpacity, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

const { width, height } = Dimensions.get('window');

function Index() {
  const navigation = useNavigation<StackNavigationProp<any>>();

  return (
    <View style={{ flex: 1, backgroundColor: '#f27a1b' }}>
      <View
        style={{
          borderTopRightRadius: 21,
          borderTopLeftRadius: 21,
          width: '100%',
          height: "100%",
          backgroundColor: '#f5f5f5',
        }}
      >
        <View>
          <TouchableOpacity  style ={{
          }}onPress={() => navigation.navigate('FoodSelectionScreen')}>
            <Image
              style={{ marginTop: 5,marginLeft:200,}}
              source={require('../../../assets/Ekran görüntüsü 2024-12-14 230042.png')}
            />
          </TouchableOpacity>
     
        
        <TouchableOpacity onPress={() => navigation.navigate('MarketScreen')}>
            <Image
              style={{ marginTop: -223, marginLeft: 10, width: 185, height: 141 }}
              source={require('../../../assets/Ekran görüntüsü 2024-12-14 230520.png')}
            />
          </TouchableOpacity>
        
  
        <TouchableOpacity onPress={() => navigation.navigate('WaterScreen')}>
            <Image
              style={{ marginTop: -78, marginLeft: 2, width: 197, height: 72 }}
              source={require('../../../assets/Ekran görüntüsü 2024-12-14 230817.png')}
            />
          </TouchableOpacity>
          </View>
      </View>
    </View>

  );
}

export default Index;
