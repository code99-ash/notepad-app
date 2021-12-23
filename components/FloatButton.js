import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

export default function FloatButton({icon, text, functionHandler, width, height, borderRadius, backgroundColor}) {
    return (
        <TouchableOpacity 
            activeOpacity={0.6} 
            underlayColor="#DDDDDD" 
            onPress={functionHandler}
            style={{
                width: width? width : 'auto',
                height: height? height : 'auto',
                padding: 10,
                borderRadius: borderRadius? borderRadius : 8,
                backgroundColor: backgroundColor? backgroundColor : 'dodgerblue',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                bottom: 15,
                right: 15,
                zIndex: 10
            }}
        >
            <View style={{flexDirection: 'row', alignItems: "center"}}>
                {text && <Text style={{fontSize: 19, color: '#fff', marginRight: icon && 5}}>{text}</Text>}
                <FontAwesome5 color="#fff" name={icon} style={{fontSize: 22, fontWeight: 'bold'}} />
            </View>
        </TouchableOpacity>
    )
}