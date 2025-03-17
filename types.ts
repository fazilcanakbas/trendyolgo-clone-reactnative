type RootStackParamList = {
  Home: undefined;
  FoodSelectionScreen: undefined;
  MarketScreen: undefined;
  WaterScreen: undefined;
  RestoranScreen: { _id: string };
  UsersInfoScreen : { id: number };
  AccountScreen: undefined;
  RestaurantProductScreen: { restaurantId: string; productId: string };
  restaurantId: string;
  productId: string;

};
