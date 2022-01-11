import { Text, View } from 'react-native';
import {styles} from './stylesheet';
import { useDealsContext } from '../models/dealsContext';

export default function DealsList() {
    const {dealsState} = useDealsContext();
  return (
    <View style={styles.container}>
        { dealsState.deals.length > 0 
        ? <Text>Deals</Text>
        : <Text>Fetcing</Text>
        }
    </View>
  );
}