import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import CustomHeaderButton from '../../components/CustomHeaderButton';
import * as productActions from '../../store/actions/products';

const EditUserScreen = (props) => {
    const userProducts = useSelector(prod => prod.products.UserProducts);
    const productId = props.navigation.getParam('productId');
    const editedProduct = userProducts.find(prod => prod.id === productId);
    const [title, setTitle] = useState(editedProduct ? editedProduct.title : '');
    const [urlImage, setUrlImage] = useState(editedProduct ? editedProduct.urlImage : '');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState(editedProduct ? editedProduct.description : '');

    const dispatch = useDispatch();
    // console.log(urlImage);

    // We want that this fct does not  re-created on each render
    //  so we use useCallback and we pass to it a dependency
    const submitHandler = useCallback(() => {
        if (productId) {
            dispatch(productActions.updateProduct(productId, title, urlImage, description))
        }
        else {
            dispatch(productActions.addProduct(title, urlImage, description, +price))

        }
        props.navigation.goBack();
    }, [dispatch, productId, title, urlImage, description, price]);
    // We want que useEffect works only when one of its dependencies change not every cycle
    useEffect(() => {
        props.navigation.setParams({ 'submit': submitHandler });
    }, [submitHandler]);

    return (
        <ScrollView style={styles.screen}>
            <View style={styles.form}>
                <View style={styles.content}>
                    <Text style={styles.label}>Title </Text>
                    <TextInput
                        style={styles.input}
                        value={title}
                        onChangeText={text => setTitle(text)}
                    />
                </View>
                <View style={styles.content}>
                    <Text style={styles.label}>Image Url </Text>
                    <TextInput
                        style={styles.input}
                        value={urlImage}
                        onChangeText={text => setUrlImage(text)}
                    />
                </View>
                {editedProduct ? null :
                    <View style={styles.content}>
                        <Text style={styles.label}>Price </Text>
                        <TextInput
                            style={styles.input}
                            value={price}
                            onChangeText={text => setPrice(text)}
                        />
                    </View>}
                <View style={styles.content}>
                    <Text style={styles.label}>Description </Text>
                    <TextInput
                        style={styles.input}
                        value={description}
                        onChangeText={text => setDescription(text)}
                    />
                </View>
            </View>
        </ScrollView>
    );
}

EditUserScreen.navigationOptions = (navData) => {
    const productId = navData.navigation.getParam('productId');
    const submitFn = navData.navigation.getParam('submit');
    return {
        headerTitle: productId ? 'Edit Product' : 'Add Product',
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                    title='save'
                    iconName={Platform.OS === 'android' ? 'md-checkmark' : 'ios-checkmark'}
                    onPress=  {submitFn}
                />
            </HeaderButtons>
        )

    }


}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: "white"
    },
    form: {
        flex: 1,
        margin: 20,
    },
    content: {
        marginVertical: 10
    },
    label: {
        fontFamily: 'open-sans-bold',
        fontSize: 16
    },
    input: {
        marginVertical: 5,
        marginHorizontal: 5,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    },

});
export default EditUserScreen;