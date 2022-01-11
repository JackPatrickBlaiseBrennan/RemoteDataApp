import { FlatList, Text, View } from 'react-native';
import {styles} from './stylesheet';
import Item from './Item';
type ItemsObject = {
  items: any,
  isDataFetched: boolean,
}

export default function ItemList({items, isDataFetched}: ItemsObject) {
  console.log(items)
  return (
    <View style={styles.list}>
        { isDataFetched
        ? <FlatList
          data = {items}
          renderItem={({item}) => 
            <Item 
              mediaLink={item.media[0]}
              title={item.title}
              price={item.price}
              cause={item.cause.name}
            />}
        />
        : <Text>Fetcing</Text>
        }
    </View>
  );
}