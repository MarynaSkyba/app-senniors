import { StyleSheet, TextInput } from "react-native";
import React from "react";

const StyledTextInput = ({
  style,
  border,
  inputMain,
  inputFirst,
  inputSecond,
  ...props
}) => {
  const inputStyle = [
    styles.inputMain,
    border === "inputFirst" && styles.inputFirst,
    border === "inputSecond" && styles.inputSecond,
    style,
  ];

  return <TextInput style={inputStyle} {...props} />;
};

const styles = StyleSheet.create({
  inputMain: {
    backgroundColor: "transparent",
    paddingHorizontal: 20,
    paddingVertical: 10,
    placeholderTextColor: "#B2B5C1",
  },
  inputFirst: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#B2B5C1",
    marginBottom: 10,
  },
  inputSecond: {
    borderBottomColor: "#B2B5C1",
    borderBottomWidth: 1,
  },
});

export default StyledTextInput;
