import React from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Colors from '../../constants/Colors';
import Card from '../../components/Card';
import * as cartActions from '../../store/actions/cart';
import * as orderActions from '../../store/actions/order';
import CartItem from '../../components/CartItem';

const ProductsCartScreen = (props) => {
    const totalAmount = useSelector(cart => cart.cart.totalAmount);
    // KIFAX AWDII N7WLO OBJECT L ARRAY
    const cartItems = useSelector(state => {
        const objectToArray = [];
        for (const key in state.cart.items) {
            objectToArray.push({
                productId: key,
                productTitle: state.cart.items[key].productTitle,
                productPrice: state.cart.items[key].productPrice,
                quantity: state.cart.items[key].quantity,
                sum: state.cart.items[key].sum
            })
        }
        return objectToArray.sort((a, b) => a.productId > b.productId ? 1 : -1);
    });

    const dispatch = useDispatch();
    return (
        <View style={styles.screen}>
            <Card style={styles.card}>
                <View style={styles.summary}>
                    <Text style={styles.textTotal}> Total:
                    $<Text style={styles.textAmount}>{Math.round(totalAmount.toFixed(2)*100)/100}</Text></Text>
                    <Button
                        title='Order'
                        color={Colors.second}
                        onPress={() => dispatch(orderActions.addOrder(cartItems, totalAmount))}
                        disabled={cartItems.length === 0}
                    />
                </View>
            </Card>
            <FlatList
                keyExtractor={item => item.productId}
                data={cartItems}
                renderItem={(itemData) =>
                    <CartItem
                        quantity={itemData.item.quantity}
                        productTitle={itemData.item.productTitle}
                        sum={itemData.item.sum.toFixed(2)}
                        deletable
                        onDelete={() => { dispatch(cartActions.deleteFromCart(itemData.item.productId)) }}
                    />}
            />

        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        margin: 20
    },
    card: {
        padding: 15,
        marginBottom: 20
    },
    summary: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textTotal: {
        fontFamily: 'open-sans-bold',
        fontSize: 18
    },
    textAmount: {
        color: Colors.primary,
        fontSize: 18,
        fontFamily: 'open-sans-bold',
    },

})
export default ProductsCartScreen;