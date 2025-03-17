import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { incrementQuantity, decrementQuantity, removeFromCart } from "../../redux/cartSlice";
import { View, Text, TouchableOpacity, FlatList } from "react-native";

const SepetimScreen = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <FlatList
      data={cartItems}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View>
          <Text>{item.name} - {item.price} TL</Text>
          <Text>Adet: {item.quantity}</Text>
          <TouchableOpacity onPress={() => dispatch(incrementQuantity(item.id))}>
            <Text>+</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => dispatch(decrementQuantity(item.id))}>
            <Text>-</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => dispatch(removeFromCart(item.id))}>
            <Text>Sepetten Kaldır</Text>
          </TouchableOpacity>
        </View>
      )}
    />
  );
}