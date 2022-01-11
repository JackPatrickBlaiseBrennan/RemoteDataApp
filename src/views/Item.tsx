import {Text, View, Image } from 'react-native';
import {styles} from './stylesheet';

type ItemObject = {
    mediaLink: any,
    title: string,
    price: number,
    cause: string,
  }

const centsToEuro = (centPrice: number) => {return`€${centPrice / 100}`}

export default function Item({mediaLink, title, price, cause}: ItemObject) {
    return (
        <View style={styles.item}>
            <Image source={{uri:mediaLink}}
                style={styles.image}
            />
            <Text>{title}</Text>
            <Text>{centsToEuro(price)}</Text>
            <Text>{cause}</Text>
      </View>
    );
  }