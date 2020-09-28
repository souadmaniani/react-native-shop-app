import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Platform } from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Ionicons } from '@expo/vector-icons';

import ProductsScreen from '../screens/shop/ProductsScreen';
import ProductsCartScreen from '../screens/shop/ProductsCartScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import ProductsOrderScreen from '../screens/shop/ProductsOrderScreen';
import UserProductsScreen from '../screens/user/UserProductsScreen';
import EditUserScreens from '../screens/user/EditUserScreens';
import Colors from '../constants/Colors';

// HEADER STYLE FOR THE STACK
const defaultNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white'
    },
    headerTitleStyle: { fontFamily: 'open-sans-bold' },
    headerTintColor: Platform.OS === 'ios' ? Colors.primary : 'white'
};


// STACK1
const ProductNavigator = createStackNavigator({
    Products: ProductsScreen,
    Cart: ProductsCartScreen,
    Details: ProductDetailScreen
}, {
    navigationOptions: {
        drawerIcon: drawerConfig => (
            <Ionicons
                name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
                size={24}
                color={drawerConfig.tintColor}

            />
        )
    },
    defaultNavigationOptions: defaultNavOptions
}
);
// STACK2
const OrderNavigator = createStackNavigator({
    Order: ProductsOrderScreen
}, {
    navigationOptions: {
        drawerIcon: drawerConfig => (
            <Ionicons
                name={Platform.OS === 'android' ? 'md-list' : 'ios-list'}
                size={24}
                color={drawerConfig.tintColor}
            />
        )
    },
    defaultNavigationOptions: defaultNavOptions
}
);
// STACK3
const UserNavigator = createStackNavigator({
    UserProducts: UserProductsScreen,
    EditProducts: EditUserScreens
}, {
    navigationOptions: {
        drawerIcon: drawerConfig => (
            <Ionicons
                name={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
                size={24}
                color={drawerConfig.tintColor}
            />
        )
    },
    defaultNavigationOptions: defaultNavOptions
}
);

// CREATE DRAWER NAVIGATION
const MainNavigation = createDrawerNavigator({
    Products: ProductNavigator,
    Order: OrderNavigator,
    Admin: UserNavigator
}, {
    contentOptions: {
        activeTintColor: Colors.primary,
        labelStyle: {
            fontFamily: 'open-sans-bold'
        }
    }
});


export default createAppContainer(MainNavigation);