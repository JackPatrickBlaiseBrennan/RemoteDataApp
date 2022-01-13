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
    headerImage:{
      width:'100%',
      height: 150,
    },
    footer:{
      flexDirection:'row',
    },
    footerDetailed:{
      flexDirection:'row',
      marginBottom:10,
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
    },
    avatar:{
      width:60,
      height:60,
    },
    detailedView:{
      marginTop:30,
    },
    fetch:{
      fontSize: 40,
      fontWeight: 'bold',
    },
    fetchView:{
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    searchbar:{
      padding:10,
      margin: 10,
      borderWidth: 1
    },
  });
