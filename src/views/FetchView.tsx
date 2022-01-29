import {View, Text, Animated,} from 'react-native';
import {styles, relativeWidth} from './stylesheet';
import { useEffect, useRef } from 'react';

export default function FetchView(this: any) {
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
        <Animated.View style={[{left: titleXPos}, styles.fetchView]}>
            <Text style={styles.fetch}>Fetcing</Text>
        </Animated.View>
    </View>
    );
  }