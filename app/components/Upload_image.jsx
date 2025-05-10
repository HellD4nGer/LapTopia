import React, { useState } from 'react';
import { View, Text, Button, Image, TouchableOpacity, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function Upload_image() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImagePick = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
      });

      if (!result.canceled) {
        setSelectedImage(result.assets[0].uri);
      }
    } catch (error) {
      console.error("Error picking image:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upload Image</Text>

      {selectedImage && (
        <Image source={{ uri: selectedImage }} style={styles.image} />
      )}

      <TouchableOpacity style={styles.uploadButton} onPress={handleImagePick}>
        <Text style={styles.uploadButtonText}>Choose Image</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFBF5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#7743DB',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  uploadButton: {
    backgroundColor: '#7743DB',
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 40,
  },
  uploadButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
