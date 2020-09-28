import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/Colors';
import CartItem from './CartItem';



const OrderItem = (props) => {
    const [showDetails, setShowDetails] = useState(false)
    return (
        <View style={styles.screen}>
            <Card style={{ padding: 15 }}>
                <View style={styles.summary}>
                    <Text style={styles.total}>${props.totalAmount.toFixed(2)}</Text>
                    <Text style={styles.date}>{props.date}</Text>
                </View>
                <View styles={styles.containerButton}>
                    <View style={styles.containerButton}>
                        <Button color={Colors.primary} title= { showDetails ? ' Hide DEATAILS' : 'SHOW DETAILS'} onPress={() => (
                            setShowDetails(prevState => !prevState)
                        )} />
                    </View>
                </View>
                {showDetails &&
                    <View>
                        {props.items.map(cartItems => (
                            <CartItem
                                key={cartItems.productId}
                                quantity={cartItems.quantity}
                                productTitle={cartItems.productTitle}
                                sum={cartItems.sum.toFixed(2)}
                            />))}
                    </View>}
            </Card>

        </View >
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        margin: 20,
    },
    summary: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    total: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
    },
    date: {
        fontSize: 16,
        color: '#888'
    },
    containerButton: {
        marginVertical: 5,
        alignItems: 'center',
    }

});
export default OrderItem;