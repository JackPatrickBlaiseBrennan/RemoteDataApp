import {Text, View, Image, TouchableOpacity } from 'react-native';
import {styles} from './stylesheet';

type ItemObject = {
    mediaLink: any,
    title: string,
    price: number,
    cause: string,
    dataKey: any,
    pressEvent: Function,
  }

const centsToEuro = (centPrice: number) => {return`€${centPrice / 100}`}

export default function Item({mediaLink, title, price, cause, dataKey, pressEvent}: ItemObject) {
    const handlePress = () => {
        pressEvent(dataKey);
    }
    return (
        <TouchableOpacity onPress={handlePress} style={styles.item}>
            <Image source={{uri:mediaLink}}
                style={styles.headerImage}
            />
            <View style={styles.info}>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.footer}>
                    <Text style={styles.cause}>{cause}</Text>
                    <Text style={styles.price}>{centsToEuro(price)}</Text>
                </View>
            </View>
      </TouchableOpacity>
    );
  }