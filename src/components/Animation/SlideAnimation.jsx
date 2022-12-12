import {
  StyleSheet,
  View,
  Image,
  useWindowDimensions,
  Text,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  interpolate,
  useAnimatedRef,
} from "react-native-reanimated";
import Pagination from "./Paginator";
import theme from "../../theme";
import StyledText from "../StyledText";

const SlideAnimation = ({ data, pagination }) => {
  const { width } = useWindowDimensions();
  const SIZE = width * 0.9;
  const SPACER = (width - SIZE) / 2;
  const x = useSharedValue(0);
  const offSet = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      x.value = event.contentOffset.x;
    },
  });

  return (
    <View>
      <Animated.ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        scrollEventThrottle={16}
        snapToInterval={SIZE}
        decelerationRate="fast"
        onScroll={onScroll}
      >
        {data.map((item, index) => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const style = useAnimatedStyle(() => {
            const scale = interpolate(
              x.value,
              [(index - 2) * SIZE, (index - 1) * SIZE, index * SIZE],
              [1, 0.5, 0.9]
            );
            return {
              transform: [{ scale }],
            };
          });
          if (!item.image) {
            return <View style={{ width: SPACER }} key={index} />;
          }
          return (
            <View style={{ width: SIZE }} key={index}>
              <Animated.View style={[styles.container, style]}>
                {/* <Image source={item.image} style={styles.image} /> */}
                <StyledText style={styles.heading}>{item.title}</StyledText>
                <StyledText style={styles.gradient}>{item.text}</StyledText>
                <StyledText style={styles.textGrey}>
                  {item.description}
                </StyledText>
              </Animated.View>
            </View>
          );
        })}
      </Animated.ScrollView>
      {pagination && <Pagination data={data} x={x} size={SIZE} />}
    </View>
  );
};

export default SlideAnimation;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    marginRight: 30,
  },
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
    width: 200,
  },
});
