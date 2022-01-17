import { useRef } from 'react';
import {Text, View, Image, TouchableOpacity, PanResponder, Animated, Dimensions } from 'react-native';
import { useSwipeContext } from '../models/swipeContext';
import {styles} from './stylesheet';

type ItemObject = {
    headerMediaLink: any,
    title: string,
    price: number,
    cause: string,
    avatarMedialink: any,
    userTitle: string,
    description: string,
    backAction: Function,
  }

const centsToEuro = (centPrice: number) => {return`€${centPrice / 100}`}

export default function DetailedView({headerMediaLink, title, price, cause, avatarMedialink, userTitle, description, backAction}: ItemObject) {
    function handlePress(){
        backAction()
    }
    const {swipeState, incrementIndex, decrementIndex} = useSwipeContext();
    
    const imageXPos = useRef(new Animated.Value(0)).current;

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (evt, gs) => {
            imageXPos.setValue(gs.dx);
        },
        onPanResponderRelease: (evt, gs) => {
            let width = Dimensions.get('window').width;
            if(Math.abs(gs.dx) > (0.4 * width)){
                let direction = Math.sign(gs.dx);
                Animated.timing(imageXPos,{toValue: direction * width, useNativeDriver: false}).start(()=>handleSwipe(-1 * direction * width)) 
            }
            else Animated.timing(imageXPos,{toValue: 0, useNativeDriver: false}).start(); 
        },
    })

    function handleSwipe(location: number){
        if (location > 0){
            incrementIndex()
        }
        else decrementIndex()
        imageXPos.setValue(location);
        Animated.spring(imageXPos,{
            toValue: 0,
            useNativeDriver: false
        }).start()
    }

    return (

        <View style={styles.detailedView}>
            <TouchableOpacity onPress={handlePress}>
                <Text>Back</Text>
            </TouchableOpacity>
            <View>
                <Animated.Image 
                    {...panResponder.panHandlers}
                    source={{uri:headerMediaLink}}
                    style={[{left: imageXPos},styles.headerImage]}
                />
                <View style={styles.info}>
                    <View style={styles.footerDetailed}>
                        <Text style={styles.cause}>{cause}</Text>
                        <Text style={styles.price}>{centsToEuro(price)}</Text>
                    </View>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.title}>Description</Text>
                    <Text>{description}</Text>
                    <Image source={{uri:avatarMedialink}}
                        style={styles.avatar}
                    />
                    <Text style={styles.title}>{userTitle}</Text>
                </View>
            </View>
      </View>
    );
  }