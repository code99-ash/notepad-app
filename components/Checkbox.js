import React from 'react'
import { View, Text } from 'react-native';

export default function Checkbox() {
    return (
        <Text style={{
            flex: 1,
            borderWidth: 1,
            borderColor: '#333',
            backgroundColor: '#fff',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            textAlign: 'center',
            color: 'dodgerblue',
            fontSize: 15,
            paddingRight: 4,
            paddingLeft: 4,
            top: 15,
            right: 10,
        }}>
            +
        </Text>
    )
}