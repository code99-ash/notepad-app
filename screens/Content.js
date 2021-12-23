import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {View, TextInput, StyleSheet} from 'react-native';
import FloatButton from '../components/FloatButton';

export default function Content({navigation, route}) {
    const dispatch = useDispatch();
    const { notes } = useSelector(state => state);

    const [id, setId] = useState(0);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [previewMode, setPreviewMode] = useState(true)

    function editNote() {
        setPreviewMode(false)
    }

    function updateNote() {
        dispatch({type: 'UPDATE_NOTE', payload: {id, title, content}})
        alert('successfully updated')
        navigation.navigate('Home')
    }

    useEffect(() => {
        const note = notes.find(each => each.id === route.params.id);
        setId(note.id)
        setTitle(note.title);
        setContent(note.content);
    }, [])

    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.title} 
                value={title} 
                onChangeText={setTitle}
                caretHidden={previewMode}
                editable={!previewMode} 
            />
            <TextInput 
                style={styles.content} 
                multiline={true} 
                value={content} 
                onChangeText={setContent}
                caretHidden={previewMode}
                editable={!previewMode} 
            />

            <FloatButton
                text={previewMode? "Edit":"Update"}
                icon={previewMode? "edit":"save"}
                backgroundColor={!previewMode && '#014101'}
                borderRadius={8}
                functionHandler={previewMode? editNote:updateNote}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8
    },
    title: {
        fontSize: 25,
        fontWeight:'bold',
        marginBottom: 15,
        paddingBottom: 10,
        borderBottomWidth: 1.5,
        borderColor: '#fff'
    },  
    content: {
        fontSize: 18,
        color: '#555'
    }
})
