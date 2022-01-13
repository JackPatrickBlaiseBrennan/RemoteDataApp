import {View, Text, Animated} from 'react-native';
import {styles} from './stylesheet';
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
        if (goLeft) value = -100;
        else value = 100;
        Animated.spring(titleXPos, {toValue: value, useNativeDriver: false }).start(
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