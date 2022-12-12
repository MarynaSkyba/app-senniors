import { StyleSheet } from "react-native";
import { NativeRouter } from "react-router-native";
import theme from "./src/theme";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/components/Home";
import SignIn from "./src/pages/SignIn";
import WelcomeTabs from "./src/components/WelcomePage/WelcomeTabs";
import Chevron from "./assets/back.png";
// import { useFonts } from "expo-font";
// import { Epilogue_900Black } from "@expo-google-fonts/epilogue";

export default function App() {
  // const [fontsLoaded] = useFonts({
  //   Epilogue: require("./assets/fonts/Epilogue.ttf"),
  // });
  const Stack = createNativeStackNavigator();

  return (
    <>
      <NavigationContainer style={styles.container}>
        <Stack.Navigator options={{ headerShown: false }}>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: "Senniors",
              headerStyle: {
                backgroundColor: theme.colors.background,
              },
              headerTitleStyle: {
                fontWeight: theme.fontWeight.bold,
                fontSize: theme.fontSizes.subheading,
                color: theme.colors.primary,
              },
            }}
          />
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{
              title: "Crear una cuenta",
              headerStyle: {
                backgroundColor: theme.colors.background,
              },
              headerTitleAlign: "center",
              headerTitleStyle: {
                fontWeight: theme.fontWeight.normal,
                fontSize: 18,
                color: theme.colors.primary,
              },
            }}
          />
          <Stack.Screen
            name="Welcome"
            component={WelcomeTabs}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
