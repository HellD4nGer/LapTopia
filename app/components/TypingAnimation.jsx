import { useRef, useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NeonText from './NeonText';

const TypingAnimation = ({ text, speed}) => {
  const [displayText, setDisplayText] = useState('');
  const textIndexRef = useRef(0);
  const timeoutRef = useRef(null); // Store the timeout ID

  const typeText = () => {
    if (textIndexRef.current < text.length) {
      // Add the current character to the displayed text
      setDisplayText((prevText) => prevText + text.charAt(textIndexRef.current));
      textIndexRef.current += 1; // Move to the next character
    } else {
      // Reset the text and start typing again
      setDisplayText('');
      textIndexRef.current = 0;
    }

    // Schedule the next character to be typed
    timeoutRef.current = setTimeout(typeText, speed);
  };

  useEffect(() => {
    // Start the typing animation
    typeText();

    // Cleanup function to clear the timeout
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <View style={styles.container}>
      <NeonText>
        {displayText}
        
      </NeonText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems:'center',
    justifyContent:'center',
  },

});

export default TypingAnimation;