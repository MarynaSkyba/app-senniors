import { View, Image, StyleSheet } from "react-native";
import React from "react";
import StyledText from "../StyledText";
import dataIcon from "../../data/dataIcon";
import theme from "../../theme";

const WelcomeOffers = () => {
  return (
    <View style={{ paddingTop: 15 }}>
      <StyledText fontWeight="bold">Que mas podemos ofrecerte? </StyledText>
      <View style={styles.container}>
        {dataIcon.map((item) => (
          <View style={styles.wrapper} key={item.id}>
            <View style={styles.imageContainer}>
              <Image source={item.img} style={styles.image} />
            </View>
            <StyledText style={styles.text}>{item.description}</StyledText>
          </View>
        ))}
      </View>

      <View style={{ height: 60 }}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  wrapper: {
    alignItems: "center",
    padding: 13,
  },
  imageContainer: {
    borderRadius: 4,
    borderColor: theme.colors.borderColor,
    borderWidth: 1,
    backgroundColor: theme.colors.white,
    // alignItems: "flex-start",
    paddingHorizontal: 33,
    paddingVertical: 20,
  },
  image: {
    width: 25,
    height: 25,
  },
  text: {
    marginTop: 5,
  },
});

export default WelcomeOffers;
