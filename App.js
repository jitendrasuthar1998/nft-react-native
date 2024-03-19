import { KeyboardAvoidingView } from 'react-native';


//add stack navigator and navigation container from react native to add navigation in complete application.

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

import { useFonts } from 'expo-font';
import Home from './screens/Home';
import Details from './screens/Details';

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent"
  }
}

export default function App() {


  const [loaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    MsMadi: require("./assets/fonts/MsMadi-Regular.ttf"),
    Ubuntu: require("./assets/fonts/Ubuntu-Regular.ttf")
  })

  if (!loaded) return null;

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Details' component={Details} />
      </Stack.Navigator>

    </NavigationContainer>
  );

  // return(
  //   <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
  //     <Text style={{fontFamily:'InterMedium', fontSize: 30}}>
  //       This is Inter Medium fontFamily.
  //     </Text>
  //     <Text style={{fontFamily:'MsMadi', fontSize: 20}}>
  //       This is Inter MsMadi-Regular fontFamily.
  //     </Text>
  //     <Text style={{fontFamily:'Ubuntu', fontSize: 20}}>
  //       This is Ubuntu-Regular fontFamily.
  //     </Text>
  //   </View>
  // )

}