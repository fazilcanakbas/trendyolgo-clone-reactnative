import React from 'react';
import { View, TouchableOpacity, Image, Dimensions } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack'; // React Navigation'dan türü içe aktarın.

const { width, height } = Dimensions.get('window');


function Index() {
  return (
    <View style={{ flex: 1, backgroundColor: '#f27a1b' }}>
      {/* Dış alanın rengini burada değiştirin */}
      <View
        style={{
          borderTopRightRadius: 21,
          borderTopLeftRadius: 21,
          width: '100%',
          height: '100%',
          backgroundColor: '#f5f5f5', // İç alanın arka plan rengi
        }}
      >
        {/* Yemek Resmi */}
        <View>
          <TouchableOpacity >
            <Image
              style={{ marginTop: 5, marginLeft: 198, width: 187, height: 225 }}
              source={require('../../../assets/Ekran görüntüsü 2024-12-14 230042.png')}
            />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Image
              style={{ marginTop: -223, marginLeft: 10, width: 185, height: 141 }}
              source={require('../../../assets/Ekran görüntüsü 2024-12-14 230520.png')}
            />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
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
