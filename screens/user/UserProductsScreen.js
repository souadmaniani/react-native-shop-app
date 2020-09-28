import React from 'react';
import { FlatList, Platform, View, Button, StyleSheet, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import CustomHeaderButton from '../../components/CustomHeaderButton';
import ProductItem from '../../components/ProductItem';
import * as productActions from '../../store/actions/products';
import Colors from '../../constants/Colors';

const UserProductScreen = (props) => {
    const editProductHandler = (id) => {
        return (
            props.navigation.navigate('EditProducts', { productId: id })
        )
    }
    const userProducts = useSelector(state => state.products.UserProducts);
    const dispatch = useDispatch();
    const deleteHandler = (id) => {
        Alert.alert('Are you sure you want to delete this item?', 'this action is irreversible!',
            [{ text: 'Cancel', style: 'default' },
            {
                text: 'Delete', style: 'destructive',
                onPress: () => { dispatch(productActions.deleteUserProduct(id)) }
            }
            ])
    }

    return (
        <FlatList
            data={userProducts}
            keyExtractor={item => item.id}
            renderItem={(itemData) => <ProductItem
                title={itemData.item.title}
                urlImage={itemData.item.urlImage}
                price={itemData.item.price}
                OnSelect={() => { editProductHandler(itemData.item.id) }}
            >
                <View style={styles.button}>
                    <Button color={Colors.primary} title='edit'
                        onPress={() => { editProductHandler(itemData.item.id) }}
                    />
                </View>
                <View style={styles.button}>
                    < Button color={Colors.second} title='delete' onPress={() => {
                        deleteHandler(itemData.item.id);
                    }} />
                </View>
            </ProductItem>
            }
        />
    );
}

UserProductScreen.navigationOptions = (navData) => {
    return ({
        headerTitle: "Your Products",
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                    title='Menu'
                    iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
                    onPress={() => { navData.navigation.toggleDrawer() }}
                />
            </HeaderButtons>
        ),
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                    title='ADD'
                    iconName={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
                    onPress={() => { navData.navigation.navigate('EditProducts') }}
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
export default UserProductScreen;