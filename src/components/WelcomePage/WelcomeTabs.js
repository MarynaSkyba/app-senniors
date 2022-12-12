import { StyleSheet, View, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Welcome from "../../pages/Welcome";
import DetailsScreen from "../../screen/DetailsScreen";
import SettingsScreen from "../../screen/SettingsScreen";
import Home from "../../../assets/home.png";
import Person from "../../../assets/user.png";
import Users from "../../../assets/users.png";
import theme from "../../theme";

const Tab = createBottomTabNavigator();

export default function WelcomeTabs() {
  return (
    <Tab.Navigator
      // options={{ headerShown: false }}
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          left: 0,
          right: 0,
          bottom: -20,
          backgroundColor: "#fff",
          borderRadius: 20,
          height: 90,
        },
      }}
    >
      <Tab.Screen
        name="Senniors"
        component={Welcome}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image source={Home} style={styles.icon} />
            </View>
          ),
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
      <Tab.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image source={Users} style={styles.icon} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="DetailsScreen"
        component={DetailsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image source={Person} style={styles.icon} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },
});
