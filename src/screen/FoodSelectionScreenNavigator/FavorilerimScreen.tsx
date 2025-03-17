import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet,Image } from 'react-native';

const FavorilerimScreen = () => {
  const [activeFilter, setActiveFilter] = useState('Tümü');

  return (
    <View style={styles.container}>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => setActiveFilter('Tümü')}
          style={[
            styles.buttontümü,
            activeFilter === 'Tümü' ? styles.activeButton : styles.inactiveButton,
          ]}
        >
          <Text
            style={[
              styles.buttonText,
              activeFilter === 'Tümü' ? styles.activeText : styles.inactiveText,
            ]}
          >
            Tümü
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setActiveFilter('Açık Restoranlar')}
          style={[
            styles.buttonaçıkrestoranlar,
            activeFilter === 'Açık Restoranlar' ? styles.activeButton : styles.inactiveButton,
          ]}
        >
          <Text
            style={[
              styles.buttonText,
              activeFilter === 'Açık Restoranlar' ? styles.activeText : styles.inactiveText,
            ]}
          >
            Açık Restoranlar
          </Text>
        </TouchableOpacity>
      </View>

   
      <View style={styles.content}>
        {activeFilter === 'Tümü' ? (
          <>
          <Image 
          source={require('../../../assets/images/favoriler.png')}
          />
            <Text style={styles.header}>Favori Restoranınız Bulunamadı</Text>
            <Text style={styles.description}>
              Adresinize şu anda hizmet veren favori restoranınız bulunmamaktadır.
            </Text>
            <TouchableOpacity style={styles.findButton}>
          <Text style={styles.findButtonText}>Favori Restoranını Bul</Text>
        </TouchableOpacity>
          </>
        ) : (
          <>
          <Image 
          source={require('../../../assets/images/favoriler.png')}
          />
            <Text style={styles.header}>Şu Anda Açık Favori Restoranınız Bulunamadı</Text>
            <Text style={styles.description}>
              Şu anda hizmet veren favori restoranınız bulunmamaktadır.
            </Text>
          </>
        )}

      
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
   
    paddingTop: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  buttontümü: {
    marginLeft:20,
    width: 65,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  buttonaçıkrestoranlar: {
    marginLeft:10,
    width: 125,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  activeButton: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#f27a1b',
    elevation: 0,
  },
  inactiveButton: {
    backgroundColor: 'white',
    elevation: 4,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  activeText: {
    color: '#f27a1b',
    fontWeight:'bold'
  },
  inactiveText: {
    color: 'black',
    fontWeight:'500'
  },
  content: {
    marginTop: 50,
    alignItems: 'center',
  },
  header: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 5,
    paddingHorizontal: 20,
  },
  findButton: {
    height:49,
    width: 250,
    marginTop: 20,
    backgroundColor: '#f27a1b',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    elevation:8,
  },
  findButtonText: {
    color: 'white',
    fontSize: 16.5,
    fontWeight: 'bold',
  },
});

export default FavorilerimScreen;
