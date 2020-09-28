import React from 'react';
import {View, StyleSheet} from 'react-native';

const Card = props => {
    return (
    <View style= {{...styles.card, ...props.style}}>{props.children}</View>
    );
};

const styles = StyleSheet.create({
    card : {
        // padding: 20,
        shadowColor: "black",
        shadowOffset: {width:0, height: 2},
        shadowOpacity: 0.26,
        shadowRadius: 6,
        elevation: 8,
        backgroundColor: "white",
        borderRadius: 10
    }
})

export default Card;