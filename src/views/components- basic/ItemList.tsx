import { FlatList,  } from 'react-native';
import Item from './Item';
type ItemsObject = {
  items: any,
  isDataFetched: boolean,
  pressEvent: Function,
}

export default function ItemList({items, isDataFetched, pressEvent}: ItemsObject) {
  return (
    <>
      <FlatList
        data = {items}
        renderItem={({item}) => 
          <Item 
            mediaLink={item.media[0]}
            title={item.title}
            price={item.price}
            cause={item.cause.name}
            dataKey={item.key}
            pressEvent={pressEvent}
          />}
        />
    </>
  );
}