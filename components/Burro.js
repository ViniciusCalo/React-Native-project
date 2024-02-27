import React from 'react';
import {Text, View, Image} from 'react-native';
export default function Burro(props) {
    return (
        <View>
            <Image
                source={{ uri: props.img }}
                style={{ width: props.largura, height: props.altura, borderRadius: props.borda}}
            />
            <Text> {props.fulano}</Text>
        </View>
    );
}
