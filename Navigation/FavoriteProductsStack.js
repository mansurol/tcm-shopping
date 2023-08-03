import SingleProductsDetailsScreen from "../Screens/SingleProductsDetailsScreen";
import { createStackNavigator } from "@react-navigation/stack";
import Routes from "../Utility/Routes";
import FavoritesProducts from "../Screens/DrawerScreen/FavoritesProducts";

const Stack = createStackNavigator();

export default function FavoriteProductsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Routes.FAVORITES_STACK}
        component={FavoritesProducts}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Routes.Tt}
        component={SingleProductsDetailsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
