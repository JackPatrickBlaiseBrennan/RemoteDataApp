import { useMemo } from 'react';
import { TextInput } from 'react-native';
import debounce from 'lodash.debounce';

type ViewParameters = {
    performSearch: Function
}


export default function SearchBar({performSearch} : ViewParameters) {
    function handleTextChange(searchTerm: string){
        performSearch(searchTerm)
    }
    const debouncedHandleTextChange = useMemo(
        () => debounce(handleTextChange, 600)
        , []);
    return (
        <TextInput 
            placeholder='Search All Deals'
            onChangeText={debouncedHandleTextChange}
        />
    );
  }