import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Button, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import Colors from '../../constants/Colors';
import * as cartActions from '../../store/actions/cart';


const ProductDetailScreen = (props) => {
    // AVAILABLE PRODUCTS
    const availableProducts = useSelector(product => product.products.Products);
    const productId = props.navigation.getParam('productId');
    const selectedProduct = availableProducts.find(product => product.id === productId);
    const dispatch = useDispatch();

    return (
        <ScrollView>
            <Image source={{uri: selectedProduct.urlImage}} style={styles.image} />
            <View style={styles.button}>
                <Button
                    color={Colors.second}
                    title='ADD To Cart'
                    onPress={() => {
                        dispatch(cartActions.addToCart(selectedProduct));
                    }}


                />
            </View>
            <View style={styles.containerDetail}>
                <Text style={styles.price}> ${selectedProduct.price.toFixed(2)} </Text>
                <Text style={styles.description}> {selectedProduct.description}</Text>
            </View>

        </ScrollView>
    );
};

ProductDetailScreen.navigationOptions = (navigationData) => {
    const title = navigationData.navigation.getParam('title');
    return ({
        headerTitle: title,
        
    });
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 250,
    },
    button: {
        marginVertical: 15,
        alignItems: 'center'
    },
    containerDetail: {
        alignItems: 'center',
        margin: 20
    },
    price: {
        fontFamily: 'open-sans-regular',
        fontSize: 20,
        color: '#888',
        marginBottom: 20,
    },
    description: {
        fontFamily: 'open-sans-bold',
        fontSize: 14,
        textAlign: 'center'
    },
})
export default ProductDetailScreen;