import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FloatButton from '../components/FloatButton';
import Checkbox from '../components/Checkbox';


export default function Home({navigation}) {
    const dispatch = useDispatch();
    const { notes } = useSelector(state => state);

    // // state hooks for delete
    const [selected, setSelected] = useState([]);

    useEffect(() => {
        AsyncStorage.getItem('ikhlas-notepad').then((data) => {
            dispatch({type: 'PASS_IN_DATA_ARRAY', payload: data})
        })
    }, [])
    
    function goToWrite() {
        navigation.navigate('Write')
    }

    function handleSelect(id) {
        if(selected.includes(id)) {
            const newSelected = selected.filter(each => each !== id);
            setSelected(newSelected);
        }else {
            setSelected([...selected, id])
        }
    }

    function removeNotes() {
        if(dispatch({type: 'REMOVE_NOTES', payload: selected})) {
            setSelected([])
        }
    }

    const renderItem = ({ item }) => (
        <TouchableOpacity 
            activeOpacity={0.6} 
            underlayColor="#DDDDDD" 
            style={[styles.card, 
                    {backgroundColor: selected.includes(item.id)? '#74b2f0e3' : 'dodgerblue'}
                ]}
            onPress={() => {
                selected.length==0? navigation.navigate('Content', {id: item.id}) : handleSelect(item.id);
            }}
            onLongPress={() => handleSelect(item.id)}
        >
            <View>
                {/* {selected.includes(item.id) && <Checkbox />} */}
                <Text style={styles.title}>{ item.title }</Text>
                <Text numberOfLines={1} style={styles.ellipsizeContent}>{ item.content }</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={notes}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            <FloatButton
                icon={selected.length==0?"plus":"trash"}
                width={50}
                height={50}
                borderRadius={50}
                backgroundColor={selected.length==0? 'dodgerblue':'red'}
                functionHandler={selected.length==0? goToWrite : removeNotes}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    text: {
        fontSize: 40,
        fontWeight: 'bold'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
    card: {
        backgroundColor: 'dodgerblue',
        borderRadius: 10,
        margin: 5,
        padding: 10,
    },
    ellipsizeContent: {
        color: 'rgba(255,255,255,.5)'
    },
    checkbox: {
        position: 'absolute',
        right: 10,
        top: 10
    }
})
