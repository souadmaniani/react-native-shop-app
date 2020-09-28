import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View, Platform} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

const CartItem = (props) => {
    return (
        <View style={styles.list}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.quan}>{props.quantity}</Text>
                <Text style={styles.tle}>{props.productTitle}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.sum}>${props.sum}</Text>
                { props.deletable && <TouchableOpacity onPress={props.onDelete}>
                    <Ionicons name={(Platform.OS === 'android') ? 'md-trash' : 'ios-trash'} size={24} color="red" />
                </TouchableOpacity>}
            </View>

        </View>

    );
};

const styles = StyleSheet.create({
    list: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 4
    },
    quan: {
        color: '#888',
        fontSize: 16,
        fontFamily: 'open-sans-bold',
        marginRight: 3
    },
    tle: {
        fontSize: 16,
        fontFamily: 'open-sans-bold',
    },
    sum: {
        fontFamily: 'open-sans-bold',
        fontSize: 16,
        marginRight: 15
    }
});
export default CartItem;