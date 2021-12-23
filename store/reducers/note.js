import AsyncStorage from '@react-native-async-storage/async-storage';

const reducer = (state=[], actions) => {

    const {type, payload} = actions;

    if(type === 'ADD_NOTE'){
        payload.id = new Date().getTime().toString();
        payload.date = new Date();

        const newNotes = [payload, ...state];
        AsyncStorage.setItem('ikhlas-notepad', JSON.stringify(newNotes));
        return newNotes;
    }

    if(type === 'UPDATE_NOTE') {
        const newState = state.map(each => (each.id === payload.id)? each = {...each, ...payload} : each);
        AsyncStorage.setItem('ikhlas-notepad', JSON.stringify(newState));
        return newState;
    }
    
    if(type === 'REMOVE_NOTES') {
        const newState = state.filter(each => !payload.includes(each.id));
        AsyncStorage.setItem('ikhlas-notepad', JSON.stringify(newState));
        return newState
    }
    
    if(type === 'PASS_IN_DATA_ARRAY') {
        return payload? JSON.parse(payload) : new Array();
    }

    return state;
}

export default reducer;