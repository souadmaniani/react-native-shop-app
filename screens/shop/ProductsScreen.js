import React from 'react';
import { FlatList, Platform, Button, StyleSheet, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import ProductItem from '../../components/ProductItem';
import * as cartActions from '../../store/actions/cart';
import CustomHeaderButton from '../../components/CustomHeaderButton';
import Colors from '../../constants/Colors';

const ProductScreen = props => {
    const onSelectHandler = (id, title) => {
        return (
            props.navigation.navigate('Details',
                {
                    productId: id,
                    title: title
                }
            )
        )
    };

    const dispatch = useDispatch()
    const renderItems = itemData => {
        return (
            <ProductItem
                title={itemData.item.title}
                urlImage={itemData.item.urlImage}
                price={itemData.item.price}
                OnSelect={() => { onSelectHandler(itemData.item.id, itemData.item.title) }}
            >
                <View style={styles.button}>
                    <Button color={Colors.primary} title='View Details'
                        onPress={() => { onSelectHandler(itemData.item.id, itemData.item.title) }}
                    />
                </View>
                <View style={styles.button}>
                    < Button color={Colors.second} title='To Cart' onPress={() => {
                        dispatch(cartActions.addToCart(itemData.item));
                    }} />
                </View>
            </ProductItem>
        );
    }


    const products = useSelector(state => state.products.Products);
    return (
        <FlatList
            data={products}
            keyExtractor={item => item.id}
            renderItem={renderItems}
        />
    );
};

ProductScreen.navigationOptions = (navData) => {

    return ({
        headerTitle: 'Products',
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                    title='Cart'
                    iconName={Platform.OS === "android" ? 'md-cart' : 'ios-cart'}
                    onPress={() => { navData.navigation.navigate('Cart') }}
                />
            </HeaderButtons>
        ),
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                    title='Menu'
                    iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
                    onPress={() => { navData.navigation.toggleDrawer() }}
                />
            </HeaderButtons>
        )
    });
}
const styles = StyleSheet.create({
    button: {
        width: '35%'
    }
});

export default ProductScreen;;