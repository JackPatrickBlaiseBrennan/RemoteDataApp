import { Text, View } from 'react-native';
import {styles} from './stylesheet';
import { useDealsContext } from '../models/dealsContext';

type ItemObject = {
  items: any,
  isDataFetched: boolean,
}

export default function ItemList({items, isDataFetched}: ItemObject) {
  return (
    <View style={styles.container}>
        { isDataFetched
        ? items.map((item: any) => (<Text key={item.key}>{item.title}</Text>))
        : <Text>Fetcing</Text>
        }
    </View>
  );
}