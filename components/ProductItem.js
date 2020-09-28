import React from 'react';
import {
    StyleSheet, Image, TouchableOpacity, TouchableNativeFeedback,
    Text, View, Platform,
} from 'react-native';

import Card from '../components/Card';

const ProductItem = props => {
    let TouchableCmp = TouchableOpacity;
    if (Platform.OS === "android" && Platform.Version >= 21)
        TouchableCmp = TouchableNativeFeedback;
    return (
            <View style={styles.container}>
                <TouchableCmp onPress={props.OnSelect} >
                    <View>
                        <Card>
                            <View style={styles.containerImage}>
                                <Image source={{uri: props.urlImage}} style={styles.image} />
                            </View>
                            <View style={styles.containerDetail}>
                                <Text style={styles.title}> {props.title} </Text>
                                <Text style={styles.price}> ${props.price.toFixed(2)}</Text>
                            </View>
                            <View style={styles.containerButton}>
                                {props.children}
                            </View>
                        </Card>
                    </View>
                </TouchableCmp>
            </View>

    );
}

const styles = StyleSheet.create({
    // screen: {
    //     backgroundColor:"white"
    // },
    container: {
        overflow: 'hidden',
        borderRadius: 10,
        margin: 20,
        height: 350
    },
    containerImage: {
        width: '100%',
        height: '60%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    containerDetail: {
        alignItems: 'center',
        height: '15%',
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 18,
        marginVertical: 6
    },
    price: {
        fontFamily: 'open-sans-regular',
        fontSize: 16,
        color: '#888'
    },
    containerButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '25%',
        marginHorizontal: 20
    },
    button: {
        width: '35%',
    },
})

export default ProductItem;