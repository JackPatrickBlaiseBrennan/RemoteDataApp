import {Text, View, Image } from 'react-native';
import {styles} from './stylesheet';

type ItemObject = {
    mediaLink: any,
    title: string,
    price: number,
    cause: string,
  }

const centsToEuro = (centPrice: number) => {return`€${centPrice / 100}`}

export default function DetailedView({mediaLink, title, price, cause}: ItemObject) {
    return (
        <View style={styles.item}>
            <Image source={{uri:mediaLink}}
                style={styles.image}
            />
            <View style={styles.info}>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.footer}>
                    <Text style={styles.cause}>{cause}</Text>
                    <Text style={styles.price}>{centsToEuro(price)}</Text>
                </View>
            </View>
      </View>
    );
  }