import { AntDesign, FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';
import React,{useState} from 'react'
import { ScrollView, TouchableOpacity, View ,Text, FlatList ,Image} from 'react-native'




const items: string[] = [
    "Popüler Lezzetler",
    "Coca-Cola Cazip Menüleri",
    "Pizzalar"
  ];
  
  const data: { [key: string]: { name: string; price: number; discountedprice?:number , description?: string; image?: string ,like?: string,command? : number }[] } = {
    "Popüler Lezzetler": [
      {
        name: "2 Orta Boy Pizza",
        discountedprice:409,
        price: 369,
        description: "İhtiyacınız olan lezzet ! bir çift orta boy pizza .",
        image: require('@/assets/pizza1.png'),
        like: "%83",
        command: 36
      },
      {
        name: "2 Orta Boy Pizza",
        discountedprice:459,
        price: 369,
        description: "İhtiyacınız olan lezzet ! bir çift orta boy pizza .",
        image: require('@/assets/pizza1.png'),
        like: "%83",
        command: 36
      },    {
        name: "2 Orta Boy Pizza",
        price: 369,
        description: "İhtiyacınız olan lezzet ! bir çift orta boy pizza .",
        image: require('@/assets/pizza1.png'),
        like: "%83",
        command: 36
      },    {
        name: "2 Orta Boy Pizza",
        price: 369,
        description: "İhtiyacınız olan lezzet ! bir çift orta boy pizza .",
        image: require('@/assets/pizza1.png'),
        like: "%83",
        command: 36
      },    {
        name: "2 Orta Boy Pizza",
        price: 369,
        description: "İhtiyacınız olan lezzet ! bir çift orta boy pizza .",
        image: require('@/assets/pizza1.png'),
        like: "%83",
        command: 36
      },    {
        name: "2 Orta Boy Pizza",
        discountedprice:399,
        price: 369,
        description: "İhtiyacınız olan lezzet ! bir çift orta boy pizza .",
        image: require('@/assets/pizza1.png'),
        like: "%83",
        command: 36
      },    {
        name: "2 Orta Boy Pizza",
        price: 369,
        description: "İhtiyacınız olan lezzet ! bir çift orta boy pizza .",
        image: require('@/assets/pizza1.png'),
        like: "%83",
        command: 36
      },    {
        name: "2 Orta Boy Pizza",
        price: 369,
        description: "İhtiyacınız olan lezzet ! bir çift orta boy pizza .",
        image: require('@/assets/pizza1.png'),
        like: "%83",
        command: 36
      },    {
        name: "2 Orta Boy Pizza",
        price: 369,
        description: "İhtiyacınız olan lezzet ! bir çift orta boy pizza .",
        image: require('@/assets/pizza1.png'),
        like: "%83",
        command: 36
      },    {
        name: "2 Orta Boy Pizza",
        price: 369,
        description: "İhtiyacınız olan lezzet ! bir çift orta boy pizza .",
        image: require('@/assets/pizza1.png'),
        like: "%83",
        command: 36
      },
      {
        name: "Sucuklu Pizza",
        price: 135,
        description: "Bol sucuklu, özel baharatlarla hazırlanmış enfes pizza.",
        image: require('@/assets/pizza2.png'),
        like: "%95",
        command: 0
      },

      {
        name: "Kıymalı Pizza",
        discountedprice: 150,
        price: 135,
        description: "Kıymalı, özel baharatlarla hazırlanmış enfes pizza.",
        image: require('@/assets/pizza3.png'),
        like: "%75",
        command: 1100
      }

    ],
    "Coca-Cola Cazip Menüleri": [
      {
        name: "Kola + Hamburger",
        price: 90,
        description: "Kola ve lezzetli hamburger menüsü.",
        image: require('@/assets/tantuni.png'),
        like: "%85",
        command: 0
      },
      {
        name: "Kola + Pizza",
        price: 150,
        description: "Kola ile mükemmel uyumlu lezzetli pizza menüsü.",
        image: require('@/assets/tantuni.png'),
        like: "%90",
        command: 0
      },
    ],
    "Pizzalar": [
        {
            name: "Kola + Hamburger",
            price: 90,
            description: "Kola ve lezzetli hamburger menüsü.",
            image: require('@/assets/tantuni.png'), 
            like: "%85",
            command: 0
        },
        {
            name: "Kola",
            price: 150,
            description: "Kola ile mdf cxs fdjh dfhjb f hjdf hj dfg hjdf dfjh vg vgh v h g f fdfd fd f gf  fd fd dfvfdvdf fd hf fdh bfdh bdfhb dfjh  fhbdfj ",
            image: require('@/assets/pizza1.png'),
        }
    ]
  };
  

  export default function index() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [selectedData, setSelectedData] = useState(data[items[0]] || []); // Eğer veri yoksa boş array ata
  




  return (
    <View style={{flex:1,backgroundColor: '#fff',}}>
        <View style={{top:2}} >
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{
              marginTop: 10, marginLeft: 12, borderBottomWidth: 2,
              borderBottomColor: "#e4e4e4",marginBottom:10
          }}
      >
          {items.map((item, index) => (
              <TouchableOpacity key={index} onPress={() => {
                  setActiveIndex(index);
                  setSelectedData(data[item]); 
              } }>
                  <Text
                      style={{
                          fontSize: 15,
                          fontWeight: 'bold',
                          marginRight: 15,

                          color: activeIndex === index ? '#d2762b' : '#959595',
                      }}
                  >
                      {item}
                  </Text>
                  {activeIndex === index && (
                      <View
                          style={{
                              marginTop: 10,
                              height: 3,
                              width: "95%",
                              backgroundColor: "#F18700",
                              borderRadius: 2,
                          }} />
                  )}
              </TouchableOpacity>
          ))}
      </ScrollView>
      <FlatList
      style={{marginBottom:110}}
              data={selectedData}
              keyExtractor={(_, index) => index.toString()}
              keyboardShouldPersistTaps="handled"
              renderItem={({ item }) => (
                
                  <View
                      style={{
                          borderBottomWidth: 1,
                          borderBottomColor: "#ddd",

                          
                      }}
                  >   <View style={{flexDirection:'row'}}>
                    <View style={{marginBottom:20}}>
                      <Text style={{fontSize: 15, fontWeight: '600', marginTop: 8, marginBottom: 3,marginLeft:12}}>
                        {item.name}
                      </Text>

             
          <Text
            style={{
              fontSize: 12,
              color: '#959595',
              marginLeft: 14,
              fontWeight: '500',
              flexWrap: 'wrap', // Metnin taşmasını sağlamak için
              width: 250, // Genişliği ayarlayabilirsiniz
            }}
            numberOfLines={2} // 2 satırdan fazla metin varsa, '...' ile kesilir
          >
            {item.description}
          </Text>

                        <View style={{flexDirection:'row'}}>
                        <View style={{width: 45, height: 30,marginLeft:12,marginTop:10,backgroundColor:'#f27a1b',borderRadius:7,justifyContent:'center',alignItems:'center'}}>
                        <FontAwesome5 name="plus" size={16} color="white" />
                        </View>

                        {item.discountedprice && (
                            <View style={{flexDirection:'column'}}>
                                <View style={{flexDirection:'row'}}>
                                <Ionicons style={{marginTop:5,marginLeft:7}}name="megaphone" size={15} color='#b60428' />
                                <Text style={{fontSize:10.7,fontWeight:'bold',marginLeft:3,color:'#b60428',marginTop:5}}>En Düşük Fiyat(7 Gün)</Text>
                                </View>
                            <View style={{flexDirection:'row'}}>
                            <Text style={{textDecorationLine:'line-through',fontSize:14.5,fontWeight:'bold',color:'#959595',marginTop:-1,marginLeft:7}}>
                                {item.discountedprice} TL
                            </Text>
                            <Text style={{ fontSize: 14.5, fontWeight: 'bold', color: '#b60428', marginTop: -1, marginLeft: 5 }}>
                                {item.price} TL
                                </Text>
                            </View>
                            </View>
                            
                        )}
                        {!item.discountedprice && (
                        <Text style={{ fontSize: 14.5, fontWeight: 'bold', color: '#f27a1b', marginTop: 15, marginLeft: 5 }}>
                            {item.price} TL
                        </Text>
                        )}
                        
                        </View>
                        <View style={{flexDirection:'row',marginTop:10,marginLeft:12}}>
                          <AntDesign name="like1" size={18} color="#0cc158" />
                          <Text style={{fontSize:14,fontWeight:'700',color:"#0cc158",marginLeft:3,marginTop:1}}>{item.like} Beğenildi</Text>
                          <Text style={{fontWeight:'bold',color:'#676767',fontSize:12,marginLeft:3,marginTop:3}}>({item.command} Değerlendirme)</Text>
                        </View>
                        </View>
            
                      {item.image && (
                          <Image source={typeof item.image === 'string' ? { uri: item.image } : item.image} style={{ width: 100, height: 90, marginLeft:20,marginTop:15 }} />
                      )}
                  </View>
                  </View>
              )} />

              </View>
              </View>

  )
}
