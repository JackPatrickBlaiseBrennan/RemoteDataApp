import {View, } from 'react-native';
import {styles} from './stylesheet';
import ItemList from './components- basic/ItemList';
import SearchBar from './components- basic/SearchBar';

type ViewParameters = {
    items: any
    isDataFetched: boolean
    pressEvent: Function
    perfromSearch: Function
}

export default function ChooseView({items, isDataFetched, pressEvent, perfromSearch}: ViewParameters) {
    return (
    <View style={styles.list}>
        <SearchBar
            performSearch={perfromSearch}
        />
        <ItemList items={items} isDataFetched={isDataFetched} pressEvent={pressEvent}/>
    </View>
    );
  }