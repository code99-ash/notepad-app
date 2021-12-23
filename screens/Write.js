import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { View, StyleSheet, TextInput } from 'react-native'
import FloatButton from '../components/FloatButton';

export default function Write({navigation}) {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const saveNote = () => {
        if(title && content) {
            if(dispatch({type: 'ADD_NOTE', payload: {title, content}})){
                alert('Note was Saved successfully');
                navigation.navigate('Home')
            }else{
                alert('Sorry, something went wrong on our end')
            }
        }
    }


    return (
        <View style={styles.container}>
            <View style={styles.titleBar}>
                <TextInput 
                    placeholder="Title" 
                    style={styles.titleInput}  
                    value={title}
                    name="title"
                    onChangeText={setTitle}
                />
            </View>
            <View style={styles.contentBar}>
                <TextInput 
                    placeholder="Note something down" 
                    style={styles.contentText} 
                    multiline={true}  
                    value={content}
                    onChangeText={setContent}
                />
            </View>
            <FloatButton
                icon="save"
                text="save"
                borderRadius={4}
                functionHandler={saveNote}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },  
    titleBar: {
        width: '100%',
        padding: 8
    },
    titleInput: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    contentBar: {
        flex: 1,
        padding: 8,
    },
    contentText: {
        fontSize: 18
    }
})