import {View, Text, Animated, Dimensions} from 'react-native';
import {styles, relativeWidth} from './stylesheet';
import ItemList from './components- basic/ItemList';
import SearchBar from './components- basic/SearchBar';
import { useEffect, useRef } from 'react';

type ViewParameters = {
    items: any
    isDataFetched: boolean
    pressEvent: Function
    perfromSearch: Function
}
export default function ChooseView(this: any, {items, isDataFetched, pressEvent, perfromSearch}: ViewParameters) {
    const titleXPos = useRef(new Animated.Value(0)).current;
    function animateFetching(goLeft: boolean){
        let value;
        if (goLeft) value = relativeWidth(-100);
        else value = relativeWidth(100);
        Animated.timing(titleXPos, {toValue: value, useNativeDriver: false }).start(
            () => {
                animateFetching(!goLeft);
            }
        );

    }
    useEffect(() => {
        animateFetching(true);
      }, [])
    return (
    <View style={styles.list}>
        { isDataFetched
        ?   <>
                <SearchBar
                    performSearch={perfromSearch}
                />
                <ItemList items={items} isDataFetched={isDataFetched} pressEvent={pressEvent}/>
            </>
        :   <Animated.View style={[{left: titleXPos}, styles.fetchView]}>
                <Text style={styles.fetch}>Fetcing</Text>
            </Animated.View>
            
        }
    </View>
    );
  }