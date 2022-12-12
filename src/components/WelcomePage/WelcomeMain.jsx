import { View, FlatList, StyleSheet, Image } from "react-native";
import React from "react";
import dataList from "../../data/data.js";
import StyledText from "../StyledText";
import WelcomeDataItem from "./WelcomeDataItems";
import theme from "../../theme";
const image = {
  uri: "https://cms-b-assets.familysearch.org/dims4/default/d4c0b5b/2147483647/strip/true/crop/800x500+0+0/resize/1240x775!/quality/90/?url=http%3A%2F%2Ffh.familysearch.org%2Fsystem%2Ffiles%2Fteam%2Fait%2Fimages%2Fblog%2Fshare-grandmas-stories.jpg",
};
import Run from "../../../assets/run.png";

const WelcomeMain = ({ data }) => {
  return (
    <View>
      <View style={{ borderRadius: 8 }}>
        {/* <ImageBackground source={image} resizeMode="cover" style={styles.image}> */}

        <View style={styles.container}>
          <Image style={styles.bgImage} source={image} />
          <View style={{ padding: 10 }}>
            <View style={styles.family}>
              <StyledText fontWeight="bold">Mama</StyledText>
            </View>
            <StyledText fontSize="subheading" fontWeight="bold" color="white">
              Antonia Lopez
            </StyledText>
            <StyledText fontSize="subheading" color="white">
              Anos:{data.age}
            </StyledText>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              {dataList.map((item) => (
                <WelcomeDataItem
                  key={item.id}
                  name={item.name}
                  img={item.img}
                  description={item.description}
                />
              ))}
            </View>

            <View style={styles.lastIcon}>
              <View>
                <Image style={{ width: 20, height: 20 }} source={Run} />
              </View>
              <View>
                <StyledText color="white" fontWeight="bold">
                  Rutina diaria
                </StyledText>
                <StyledText color="white" fontWeight="bold">
                  Sin problemas
                </StyledText>
              </View>
            </View>
          </View>
        </View>
        {/* </ImageBackground> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    // paddingVertical: 15,
    // marginHorizontal: 20,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    overflow: "hidden",
    borderRadius: 8,
    opacity: 0.9,
  },
  family: {
    backgroundColor: theme.colors.blue,
    borderRadius: 20,
    alignSelf: "flex-start",
    paddingHorizontal: 15,
    paddingVertical: 5,
    flexDirection: "row",
  },
  bgImage: {
    flex: 1,
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 10,
    padding: 15,
  },
  lastIcon: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 8,
    backgroundColor: "rgba(145,145,145,0.7)",
    marginBottom: 15,
  },
});

export default WelcomeMain;
