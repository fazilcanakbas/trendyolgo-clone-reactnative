import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import UsersInfoScreen from './AccountScreens/UsersInfoScreen';


type RootStackParamList = {
    UsersInfoScreen: { user: { id: number; name: string; icon: string } };  // Burada 'user' tipi olarak object tanımlıyoruz.
    SavedCardsScreen: undefined; // Add this line
    PasswordChangeScreen: undefined; // Add this line
    DefaultScreen: undefined; // Add this line
  };
  

interface account {
    id: number  ;   
  }

const veri = [
  { id: 1, name: 'Kullanıcı Bilgilerim', icon: 'user' },
  { id: 2, name: 'Kayıtlı Kartlarım', icon: 'credit-card' },
  { id: 3, name: 'Şifre Değişikliği', icon: 'lock' },
  { id: 4, name: 'E-Posta Değişikliği', icon: 'envelope' },
  { id: 5, name: 'Duyuru Tercihleri', icon: 'bell' },
  { id: 6, name: 'Başarılı/Başarısız Girişler', icon: 'lock' },
  { id: 7, name: 'Daha Fazla', icon: 'ellipsis-h' },
  { id: 8, name: 'Çıkış Yap', icon: 'sign-out' },

];

export default function AccountScreen() {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [account, setAccount] = useState<account[]>([]);
  
    return (
      <View>
        <FlatList
          data={veri}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{ backgroundColor: '#ffff' }}
              onPress={() => {
                // Her öğe için farklı bir ekran yönlendirmesi yapıyoruz
                switch (item.name) {
                  case 'Kullanıcı Bilgilerim':
                    navigation.navigate('UsersInfoScreen', { user: { id: item.id, name: item.name, icon: item.icon } });
                    break;
                  case 'Kayıtlı Kartlarım':
                    navigation.navigate('SavedCardsScreen'); // Örnek başka bir ekran
                    break;
                  case 'Şifre Değişikliği':
                    navigation.navigate('PasswordChangeScreen'); // Örnek başka bir ekran
                    break;
                  // Diğer öğeler için de benzer şekilde ekranlar ekleyebilirsiniz
                }
              }}
            >
              <View style={{ bottom: 20 }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingTop: 10,
                    paddingLeft: 19,
                    backgroundColor: '#ffff',
                    marginTop: 35,
                  }}
                >
                  <Icon name={item.icon} style={{ marginRight: 10 }} size={20} color='#f87d1d' />
                  <Text style={{ fontSize: 14, fontWeight: 'bold', marginLeft: 10 }}>
                    {item.name}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
  