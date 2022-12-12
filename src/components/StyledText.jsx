import { View, Text, StyleSheet } from "react-native";
import React from "react";
import theme from "../theme";

const styles = StyleSheet.create({
  text: {
    color: theme.colors.primary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeight.normal,
  },
  colorWarn: {
    color: theme.colors.textWarn,
  },

  bold: {
    fontWeight: theme.fontWeight.bold,
  },
  subheading: {
    fontSize: theme.fontSizes.subheading,
  },
  small: {
    fontSize: theme.fontSizes.small,
  },
  white: {
    color: theme.colors.white,
  },
});

export default function StyledText({
  children,
  color,
  fontSize,
  fontWeight,
  style,
  ...restOfProps
}) {
  const textStyle = [
    styles.text,
    color === "warn" && styles.colorWarn,
    color === "white" && styles.white,
    fontSize === "subheading" && styles.subheading,
    fontSize === "small" && styles.small,
    fontWeight === "bold" && styles.bold,
    style,
  ];

  return (
    <Text style={textStyle} {...restOfProps}>
      {children}
    </Text>
  );
}
