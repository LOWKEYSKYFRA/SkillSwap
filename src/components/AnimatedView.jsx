import React from 'react';
import { Animated, KeyboardAvoidingView } from 'react-native';

export default function AnimatedView({ children, style, from = { opacity: 0, translateY: 20 }, to = { opacity: 1, translateY: 0 }, duration = 500 }) {
  const anim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(anim, {
      toValue: 1,
      duration,
      useNativeDriver: true,
    }).start();
  }, []);

  const animatedStyle = {
    opacity: anim.interpolate({ inputRange: [0, 1], outputRange: [from.opacity, to.opacity] }),
    transform: [{ translateY: anim.interpolate({ inputRange: [0, 1], outputRange: [from.translateY, to.translateY] }) }],
  };

  return <Animated.View style={[animatedStyle, style]}>{children}</Animated.View>;
}