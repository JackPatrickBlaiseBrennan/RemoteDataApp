import { FlatList,  } from 'react-native';
import Item from './Item';
type ItemsObject = {
  items: any,
  pressEvent: Function,
}

export default function ItemList({items, pressEvent}: ItemsObject) {
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