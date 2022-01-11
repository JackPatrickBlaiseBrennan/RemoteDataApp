import { StyleSheet,} from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    list:{
      flex: 1,
      backgroundColor: '#fff',
      width:'100%',
      paddingTop: 50,
    },
    item:{
      margin: 10,
      borderWidth: 1,
      borderColor:'lightgrey',
    },
    image:{
      width:'100%',
      height: 150,
    },
    footer:{
      flexDirection:'row',
    },
    price:{
      textAlign:'right',
      flex: 1,
    },
    cause:{
      flex: 2,
    },title:{
      fontSize: 17,
      fontWeight:'bold',
      paddingBottom: 15,
    },
    info:{
      padding: 15
    }
  });
