import React, { useState, useEffect, useMemo } from "react";
import { Animated, StyleSheet, View, Pressable, Easing } from "react-native";

const Switch = ({
  isOn,
  onToggle,
  inactiveBgColor = "#7d7d7d",
  activeBgColor = "#34c759",
}) => {
  const [animatedValue, setAnimatedValue] = useState(new Animated.Value(0));
  const [colorAnimatedValue, setColorAnimatedValue] = useState(
    new Animated.Value(0)
  );
  const [circleWidthAnimatedValue, setCircleWidthAnimatedValue] = useState(
    new Animated.Value(0)
  );
  const [translateX, setTranslateX] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: isOn ? 1 : 0,
      duration: 110,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();

    Animated.timing(colorAnimatedValue, {
      toValue: isOn ? 1 : 0,
      duration: 300,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, [isOn]);

  const onTouchStart = () => {
    Animated.timing(circleWidthAnimatedValue, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
    if (isOn)
      Animated.timing(translateX, {
        toValue: -7,
        duration: 200,
        useNativeDriver: false,
      }).start();
  };

  const onTouchEnd = () => {
    Animated.timing(circleWidthAnimatedValue, {
      toValue: 0,
      duration: 100,
      useNativeDriver: false,
    }).start();
    Animated.timing(translateX, {
      toValue: 0,
      duration: 100,
      useNativeDriver: false,
    }).start();
  };

  const moveToggle = useMemo(
    () =>
      animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [2.3, 22],
      }),
    []
  );

  const circleWidth = useMemo(
    () =>
      circleWidthAnimatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [27.8, 35],
      }),
    []
  );

  const bgColor = colorAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [inactiveBgColor, activeBgColor],
  });

  return (
    <View style={styles.container}>
      <Pressable
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onPress={onToggle}
      >
        <Animated.View
          style={[
            styles.toggleContainer,
            {
              backgroundColor: bgColor,
            },
          ]}
        >
          <Animated.View
            style={[
              styles.toggleWheelStyle,
              {
                marginLeft: moveToggle,
                width: circleWidth,
                transform: [{ translateX: translateX }, { translateY: -0.4 }],
              },
            ]}
          />
        </Animated.View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { display: "flex", justifyContent: "space-between" },
  toggleContainer: {
    width: 52,
    height: 32.7,
    borderRadius: 4000,
    justifyContent: "center",
  },
  toggleWheelStyle: {
    height: 28.5,
    backgroundColor: "#ffffff",
    borderRadius: 200,
    shadowColor: "#515151",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.5,
    elevation: 1.5,
  },
});

export default Switch;
