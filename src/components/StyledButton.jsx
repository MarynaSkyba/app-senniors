import { StyleSheet, Pressable, Text } from "react-native";
import React from "react";
import theme from "../theme";
import StyledText from "./StyledText";

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    borderWidth: 1,
    alignContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 14,
    marginBottom: 8,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeight.normal,
  },
  buttonPrimary: {
    backgroundColor: theme.colors.white,
    color: theme.colors.primary,
    borderColor: "#B2B5C1",
  },
  buttonSecondary: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.white,
  },
  text: {
    fontSize: theme.fontSizes.body,
    alignSelf: "center",
  },
});

export default function StyledButton({
  to,
  children,
  button,
  style,
  ...restOfProps
}) {
  const buttonStyle = [
    styles.button,
    button === "primary" && styles.buttonPrimary,
    button === "secondary" && styles.buttonSecondary,
    style,
  ];

  return (
    <>
      <Pressable style={buttonStyle} {...restOfProps}>
        <StyledText style={styles.text}> {children}</StyledText>
      </Pressable>
    </>
  );
}
