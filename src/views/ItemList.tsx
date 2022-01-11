import { FlatList, Text, View } from 'react-native';
import {styles} from './stylesheet';

type ItemObject = {
  items: any,
  isDataFetched: boolean,
}

export default function ItemList({items, isDataFetched}: ItemObject) {
  return (
    <View style={styles.list}>
        { isDataFetched
        ? <FlatList
          data = {items}
          renderItem={({item}) => <Text>{item.title}</Text>}
        />
        : <Text>Fetcing</Text>
        }
    </View>
  );
}