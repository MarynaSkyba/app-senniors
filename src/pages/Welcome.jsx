import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import StyledText from "../components/StyledText";
import WelcomeMain from "../components/WelcomePage/WelcomeMain.jsx";
import WelcomeInfo from "../components/WelcomePage/WelcomeInfo";
import WelcomeOffers from "../components/WelcomePage/WelcomeOffers";
import theme from "../theme";

const Welcome = () => {
  const [repositories, setRepositories] = useState([]);

  const fetchRepositories = async () => {
    const response = await fetch("https://api.agify.io?name=Claudia");
    const json = await response.json();
    setRepositories(json);
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

  return (
    <View
      style={{ backgroundColor: theme.colors.background, paddingVertical: 20 }}
    >
      <ScrollView>
        <View style={styles.container}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <StyledText fontWeight="bold" style={{ fontSize: 20 }}>
              Buenos dias,
            </StyledText>
            <StyledText style={styles.name}>{repositories.name} !</StyledText>
          </View>
          <WelcomeMain data={repositories} />
          <WelcomeInfo />
          <WelcomeOffers />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: theme.colors.background,
    marginHorizontal: 20,
  },
  name: {
    color: theme.colors.textWarn,
    fontSize: 20,
    marginLeft: 10,
  },
});

export default Welcome;
