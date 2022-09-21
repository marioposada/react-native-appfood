import 'react-native-gesture-handler';

import SearchScreen from "./src/screens/SearchScreen";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
const navigator = createStackNavigator(
  {
    Search: SearchScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Buscador de negocios",
    },
  }
);

export default createAppContainer(navigator);
