import { View, Image, StyleSheet } from "react-native";
import React from "react";
import StyledText from "../StyledText";

const WelcomeDataItem = ({ name, img, description, id }) => {
  return (
    <View style={styles.container} key={id}>
      <View
        style={{ flexFlow: "wrap", paddingBottom: 2, alignItems: "center" }}
      >
        <View>
          <Image style={styles.image} source={img} />
        </View>
        <View>
          <StyledText color="white" fontWeight="bold">
            {name}
          </StyledText>
          <StyledText color="white" fontWeight="bold">
            {description}
          </StyledText>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 20,
    height: 20,
  },
  container: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 8,
    backgroundColor: "rgba(145,145,145,0.7)",
    marginBottom: 15,
    width: 150,
  },
});

export default WelcomeDataItem;
