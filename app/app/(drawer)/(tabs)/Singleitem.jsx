import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { getProductById } from '../../../firebase/products';
import lab1 from '../../../assets/images/lab1.png';
import lab2 from '../../../assets/images/lab2.png';
import lab3 from '../../../assets/images/lab3.png';
import lab4 from '../../../assets/images/lab4.png';
import lab5 from '../../../assets/images/lab5.png';

const imageMap = {
  lab1,
  lab2,
  lab3,
  lab4,
  lab5,
};

export default function SingleItem() {
  const { id } = useLocalSearchParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('details');
  const [selectedRating, setSelectedRating] = useState(0);

  
  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const data = await getProductById(id);
        if (data) {
          setProduct(data);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, [id]);

  
  const handleRatingSelection = (ratingValue) => {
    setSelectedRating(ratingValue);
  };

  
  let ratingMessage = 'Select a rating';
  if (selectedRating > 0) {
    ratingMessage = `You selected ${selectedRating} star`;
    if (selectedRating > 1) {
      ratingMessage += 's';
    }
  }

  
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  
  if (!product) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Product not found</Text>
      </View>
    );
  }

  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.name}>{product.name}</Text>

      
      <View style={styles.imageContainer}>
        <Image source={imageMap[product.image] || lab1} style={styles.productImage} />
      </View>

      
      <Text style={styles.availability}>Available</Text>

      
      <View style={styles.ratingPriceContainer}>
        <View style={styles.ratingContainer}>
          {[1, 2, 3, 4, 5].map((star) => (
            <FontAwesome
              key={star}
              name={star <= selectedRating ? 'star' : 'star-o'}
              size={20}
              color={star <= selectedRating ? '#FFA500' : '#CCCCCC'}
              onPress={() => handleRatingSelection(star)}
            />
          ))}
          <Text style={styles.ratingText}>{selectedRating > 0 ? selectedRating : 'No Rating'}</Text>
        </View>
        <Text style={styles.price}>EGP {product.price || 15000}</Text>
      </View>

      
      <View style={styles.tabsContainer}>
        <TouchableOpacity onPress={() => setActiveTab('details')}>
          <Text style={[styles.tab, activeTab === 'details' && styles.activeTab]}>Details</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('review')}>
          <Text style={[styles.tab, activeTab === 'review' && styles.activeTab]}>Review</Text>
        </TouchableOpacity>
      </View>

      
      {activeTab === 'details' ? (
        <Text style={styles.detailsText}>{product.description}</Text>
      ) : (
        <View style={styles.reviewContainer}>
          <Text style={styles.reviewTitle}>Rate this Product</Text>
          <View style={styles.starsContainer}>
            {[1, 2, 3, 4, 5].map((star) => (
              <TouchableOpacity key={star} onPress={() => handleRatingSelection(star)}>
                <FontAwesome
                  name={star <= selectedRating ? 'star' : 'star-o'}
                  size={40}
                  color={star <= selectedRating ? '#FFA500' : '#CCCCCC'}
                  style={styles.selectableStar}
                />
              </TouchableOpacity>
            ))}
          </View>
          <Text style={styles.selectedRatingText}>{ratingMessage}</Text>
        </View>
      )}

      
      <TouchableOpacity style={styles.addToCartButton}>
        <FontAwesome name="shopping-cart" size={20} color="#FFF" style={styles.cartIcon} />
        <Text style={styles.addToCartText}>Add to Cart</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FBFBFB',
    alignItems: 'center',
    minHeight: '100%',
  },
  imageContainer: {
    width: 250,
    height: 250,
    borderRadius: 10,
    borderWidth: 0.6,
    borderColor: '#3B1E54',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  productImage: {
    width: 200,
    height: 200,
    borderRadius: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 15,
    textAlign: 'center',
  },
  availability: {
    fontSize: 18,
    color: 'green',
    marginBottom: 10,
  },
  ratingPriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    marginBottom: 20,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 18,
    color: '#555',
    marginLeft: 8,
  },
  price: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#3B1E54',
  },
  tabsContainer: {
    flexDirection: 'row',
    marginBottom: 15,
    width: '90%',
    justifyContent: 'flex-start',
  },
  tab: {
    fontSize: 18,
    color: '#AAA',
    marginRight: 20,
    fontWeight: 'bold',
  },
  activeTab: {
    color: '#7743DB',
    textDecorationLine: 'underline',
  },
  detailsText: {
    fontSize: 16,
    color: '#555',
    textAlign: 'left',
    width: '90%',
    lineHeight: 24,
    marginBottom: 20,
  },
  reviewContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  reviewTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#3B1E54',
  },
  starsContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  selectableStar: {
    marginHorizontal: 5,
  },
  selectedRatingText: {
    fontSize: 18,
    color: '#555',
    marginBottom: 20,
  },
  addToCartButton: {
    flexDirection: 'row',
    backgroundColor: '#804FB3',
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 40,
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addToCartText: {
    fontSize: 20,
    color: '#FFF',
    marginLeft: 10,
    fontWeight: 'bold',
  },
  cartIcon: {
    marginRight: 5,
  },
});
