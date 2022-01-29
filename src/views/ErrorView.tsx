import {View, Text, Animated,} from 'react-native';
import {styles,} from './stylesheet';

export default function ErrorView(this: any) {
    return (
    <View style={styles.fetchView}>
        <Text style={styles.error}>Something Went Wrong</Text>
    </View>
    );
  }