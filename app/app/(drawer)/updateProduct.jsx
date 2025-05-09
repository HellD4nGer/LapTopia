import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Pressable,
  Switch,
  Text,
  StyleSheet,
} from "react-native";
import { updateProduct, getProductById } from "../../firebase/products";
import { useLocalSearchParams, useRouter } from "expo-router";

const UpdateProduct = () => {
  const { id } = useLocalSearchParams();
  const [product, setProduct] = useState({
    name: "",
    price: "",
    max: "",
    isAvailable: false,
    images: [],
    id: "",
    discountPrice: "",
  });
  const router = useRouter();
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        console.log("id", id);
        const productData = await getProductById(id);
        console.log("productData", productData);
        if (productData) {
          setProduct(productData);
        } else {
          console.log("Product data is empty or undefined.");
        }
      } catch (error) {
        console.log("Error fetching product:", error);
      }
    };

    fetchProduct(); // Call fetchProduct immediately inside useEffect
  }, [id]);

  const handleUpdateProduct = async () => {
    console.log("Updated product", product);
    try {
      await updateProduct(product);
      router.push("/");
    } catch (error) {
      console.log("Error updating product:", error);
    }
  };

  const handleChange = (key, value) => {
    setProduct((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={product.name || ""}
        onChangeText={(text) => handleChange("name", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        value={product.price || ""}
        onChangeText={(text) => handleChange("price", text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Max"
        value={product.max || ""}
        onChangeText={(text) => handleChange("max", text)}
        keyboardType="numeric"
      />
      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Is Available:</Text>
        <Switch
          value={product.isAvailable}
          onValueChange={(value) => handleChange("isAvailable", value)}
        />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Images (You can enter the URLs separated by comma)"
        value={(product.images && product.images.join(",")) || ""}
        onChangeText={(text) => handleChange("images", text.split(","))}
      />
      <TextInput
        style={styles.input}
        placeholder="ID"
        value={product.id || ""}
        onChangeText={(text) => handleChange("id", text)}
        editable={false} // ID should not be editable in update mode
      />
      <TextInput
        style={styles.input}
        placeholder="Discount Price"
        value={product.discountPrice || ""}
        onChangeText={(text) => handleChange("discountPrice", text)}
        keyboardType="numeric"
      />
      <Pressable
        onPress={handleUpdateProduct}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
      >
        <Text style={styles.buttonText}>Update Product</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#FFE366",
    height: "100%",
  },
  input: {
    backgroundColor: 'rgb(255, 255, 255)',
    width: "100%",
    height: 50,
    marginVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 18,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    marginLeft: 10,
    fontSize: 16,
  },
  switchLabel: {
    marginRight: 10,
  },
  button: {
    backgroundColor: "blue",
    borderRadius: 25,
    padding: 10,
    alignItems: "center",
    width: "50%",
    alignSelf: "center",
  },
  buttonPressed: {
    backgroundColor: "#0056b3",
  },
  buttonText: {
    color: "white",
    fontSize: 23,
  },
});

export default UpdateProduct;