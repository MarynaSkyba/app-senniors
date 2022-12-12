import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import StyledText from "../StyledText";
import Heart from "../../../assets/heart-w.png";
import Card from "../../../assets/doctor.png";
import Next from "../../../assets/next.png";
import Close from "../../../assets/close.png";
import theme from "../../theme";

const WelcomeInfo = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.imageClose} source={Close} />

      <View style={styles.flexRow}>
        <Image style={styles.image} source={Heart} />
        <StyledText color="warn" fontWeight="bold">
          Recomendation sanitaria
        </StyledText>
      </View>
      <StyledText style={styles.separator}>
        En funcion a los resultados obtenidos valoramos este servicio como lorem
        ipsum
      </StyledText>
      <View style={styles.flexBotttomRow}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image style={styles.image} source={Card} />
          <StyledText fontWeight="bold">Fisioterapia</StyledText>
        </View>
        <View>
          <Image style={{ width: 10, height: 10 }} source={Next} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 2,
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.blue,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 20,
  },
  imageClose: {
    width: 15,
    height: 15,
    alignSelf: "flex-end",
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 8,
  },
  flexBotttomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 8,
    paddingBottom: 8,
  },
  separator: {
    paddingBottom: 8,
    borderBottomColor: "#B2B5C1",
    borderBottomWidth: 1,
  },
});

export default WelcomeInfo;
