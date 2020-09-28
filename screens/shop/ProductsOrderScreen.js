import React from 'react';
import { Platform, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

import CustomHeaderButton from '../../components/CustomHeaderButton';
import OrderItem from '../../components/OrderItem';


const ProductsOrderScreen = (props) => {
    const orders = useSelector(state => state.orders.orders);
    
    return (
        <FlatList
            data={orders}
            keyExtractor={item => item.id}
            renderItem={(itemData) =>
                <OrderItem
                    totalAmount={itemData.item.totalAmount}
                    date={itemData.item.readableDate}
                    items={itemData.item.items}
                />
            }
        />
    );
};

ProductsOrderScreen.navigationOptions = (navData) => {
    return ({
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton} >
                <Item
                    name='Order Menu'
                    iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
                    onPress={() => navData.navigation.toggleDrawer()}
                />
            </HeaderButtons>
        )
    });
}

export default ProductsOrderScreen;