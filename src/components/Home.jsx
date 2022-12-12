import { View, StyleSheet, Image, Pressable } from "react-native";
import React, { useRef, useEffect } from "react";
import StyledText from "./StyledText";

import theme from "../theme";
import Google from "../../assets/google.png";
import Person from "../../assets/user.png";
import Heart from "../../assets/heart-b.png";
import SlideAnimation from "./Animation/SlideAnimation";
import data from "../data/dataAnimation";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SlideAnimation data={data} pagination={true} />

      <View style={{ marginTop: 60 }}>
        <View style={styles.button}>
          <Image source={Heart} style={styles.img} />
          <StyledText style={styles.text}>Acceder con Senniors ID</StyledText>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 8,
            marginBottom: 15,
          }}
        >
          <View style={styles.divider} />
          <View>
            <StyledText style={styles.dividerText}>O</StyledText>
          </View>
          <View style={styles.divider} />
        </View>

        <View style={styles.button}>
          <Image source={Google} style={styles.img} />
          <StyledText style={styles.text}>Continuar con Google</StyledText>
        </View>

        <Pressable onPress={() => navigation.navigate("SignIn")}>
          <View style={styles.button}>
            <Image source={Person} style={styles.img} />
            <StyledText style={styles.text}>Crear una cuenta</StyledText>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  textBox: { marginVertical: 80 },
  heading: {
    fontSize: 30,
    letterSpacing: 2,
    lineHeight: 40,
  },
  gradient: {
    fontSize: 30,
    letterSpacing: 2,
    lineHeight: 40,
    color: theme.colors.textWarn,
  },
  textGrey: {
    color: theme.colors.borderColor,
    fontSize: 18,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: theme.colors.borderColor,
  },
  dividerText: {
    width: 40,
    textAlign: "center",
    color: theme.colors.borderColor,
  },
  button: {
    borderRadius: 8,
    borderWidth: 1,
    alignContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 15,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeight.normal,
    backgroundColor: theme.colors.white,
    color: theme.colors.primary,
    borderColor: "#B2B5C1",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: theme.fontSizes.body,
    alignSelf: "center",
  },
  img: {
    width: 20,
    height: 20,
    marginRight: 15,
  },
});

export default Home;
