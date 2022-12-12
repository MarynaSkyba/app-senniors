import { View, StyleSheet, Pressable } from "react-native";
import React, { useEffect, useState } from "react";

import { Formik, Field } from "formik";
import StyledTextInput from "../components/StyledTextInput";
import StyledText from "../components/StyledText";
import theme from "../theme";

const initialValues = {
  name: "",
  surname: "",
  telephone: "",
  address: "",
  email: "",
  password: "",
  passwordRepite: "",
  toggle: false,
};

export default function SignIn({ navigation }) {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          actions.setName(values.name);
        }}
      >
        {({ handleSubmit, handleChange, setFieldValue, values }) => {
          {
            /* const { values, handleChange } = formikProps; */
          }

          return (
            <View style={styles.form}>
              <View style={styles.gatherInput}>
                <StyledTextInput
                  border="inputSecond"
                  placeholder="Nombre"
                  name="name"
                  value={values.name}
                  onChange={handleChange("name")}
                  // onChangeText={handleChange("name")}
                />
                <StyledTextInput
                  placeholder="Appellidos"
                  name="surname"
                  value={values.surname}
                  onChangeText={handleChange("surname")}
                />
              </View>
              <StyledText
                fontSize="small"
                border="inputFirst"
                style={styles.margin}
              >
                Tu nombre será público
              </StyledText>
              <View style={{ marginTop: 8, marginBottom: 8 }}>
                <StyledTextInput
                  border="inputFirst"
                  placeholder="Teléfono móvil"
                  name="telephone"
                  value={values.telephone}
                  onChangeText={handleChange("telephone")}
                />
                <StyledTextInput
                  border="inputFirst"
                  placeholder="Dirección"
                  name="address"
                  value={values.address}
                  onChangeText={handleChange("address")}
                />
              </View>
              <View style={styles.gatherInput}>
                <StyledTextInput
                  border="inputSecond"
                  placeholder="Email"
                  name="email"
                  value={values.email}
                  onChangeText={handleChange("email")}
                />
                <StyledTextInput
                  placeholder="Contraseña"
                  name="password"
                  value={values.password}
                  onChangeText={handleChange("password")}
                  secureTextEntry
                />
              </View>
              <StyledText fontSize="small" style={styles.margin}>
                La contraseña deberá tener al menos 8 characters, contener
                mayusculas y numeros
              </StyledText>
              <StyledTextInput
                style={{ marginTop: 8 }}
                border="inputFirst"
                placeholder="Repetir contraseña"
                name="passwordRepite"
                value={values.passwordRepite}
                onChangeText={handleChange("passwordRepite")}
                secureTextEntry
              />
              <View style={styles.checkbox}>
                <View>{/* <Field type="checkbox" /> */}</View>
                <StyledText fontSize="small" style={styles.margin}>
                  He leido y acepto los terminos y condiciones de Senniors
                  familias y la politica de privacidad
                </StyledText>
              </View>

              <Pressable
                style={styles.button}
                onPress={() => navigation.navigate("Welcome")}
              >
                <StyledText style={styles.text}>Aceptar y continuar</StyledText>
              </Pressable>
            </View>
          );
        }}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  form: {
    padding: 15,
  },
  margin: {
    marginBottom: 10,
    color: theme.colors.borderColor,
  },
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
    backgroundColor: theme.colors.primary,
    color: theme.colors.white,
  },
  text: {
    fontSize: theme.fontSizes.body,
    alignSelf: "center",
    color: theme.colors.white,
  },
  gatherInput: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.colors.borderColor,
    marginBottom: 4,
  },

  checkbox: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 40,
  },
});
