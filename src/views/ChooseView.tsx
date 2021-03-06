import {View, Text, Animated,} from 'react-native';
import {styles, relativeWidth} from './stylesheet';
import ItemList from './components- basic/ItemList';
import SearchBar from './components- basic/SearchBar';
import { useEffect, useRef } from 'react';

type ViewParameters = {
    items: any
    pressEvent: Function
    perfromSearch: Function
}
export default function ChooseView(this: any, {items, pressEvent, perfromSearch}: ViewParameters) {
    const titleXPos = useRef(new Animated.Value(0)).current;
    
    function animateFetching(goLeft: boolean){
        let value;
        if (goLeft) value = relativeWidth(-100);
        else value = relativeWidth(100);
        Animated.timing(titleXPos, {toValue: value, useNativeDriver: false }).start(
            ({finished}) => {
                if (finished)animateFetching(!goLeft);
            }
        );
    }
    useEffect(() => {
        animateFetching(true);
      }, [])
    return (
    <View style={styles.list}>

        <SearchBar
            performSearch={perfromSearch}
        />
        <ItemList items={items} pressEvent={pressEvent}/>
    </View>
    );
  }