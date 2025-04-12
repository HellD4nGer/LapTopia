import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NeonText = ({ children, color = 'rgb(255, 136, 0)', shadowColor = 'rgb(0, 0, 0)', }) => {
  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.neonText,
          {
            color: color, // Neon text color
            textShadowColor: shadowColor, // Glow color
          },
        ]}
      >
        {children}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,
  },
  neonText: {
    fontSize: 30,
    fontWeight: 'bold',
    textShadowRadius: 10,
  },
});

export default NeonText;