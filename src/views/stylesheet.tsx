import { StyleSheet, Dimensions} from 'react-native';


export const relativeWidth = (number:number) => {
  let width = Dimensions.get('window').width;
  let TestDeviceWidth = 411.42857142857144;
  let ratio = TestDeviceWidth / number;
  return width / ratio

}

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
      paddingTop: relativeWidth(50),
    },
    item:{
      margin: relativeWidth(10),
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
      marginBottom:relativeWidth(10),
    },
    price:{
      textAlign:'right',
      flex: 1,
    },
    cause:{
      flex: 2,
    },title:{
      fontSize: relativeWidth(17),
      fontWeight:'bold',
      paddingBottom: 15,
    },
    info:{
      padding: relativeWidth(15)
    },
    avatar:{
      width:60,
      height:60,
    },
    detailedView:{
      marginTop:30,
    },
    fetch:{
      fontSize: relativeWidth(40),
      fontWeight: 'bold',
    },
    fetchView:{
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    searchbar:{
      padding:relativeWidth(10),
      margin: relativeWidth(10),
      borderWidth: 1
    },
    error:{
      fontSize: relativeWidth(40),
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });
