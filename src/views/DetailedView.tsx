import {Text, View, Image, TouchableOpacity } from 'react-native';
import {styles} from './stylesheet';

type ItemObject = {
    headerMediaLink: any,
    title: string,
    price: number,
    cause: string,
    avatarMedialink: any,
    userTitle: string,
    description: string,
    backAction: Function,
  }

const centsToEuro = (centPrice: number) => {return`€${centPrice / 100}`}

export default function DetailedView({headerMediaLink, title, price, cause, avatarMedialink, userTitle, description, backAction}: ItemObject) {
    function handlePress(){
        backAction()
    }
    return (

        <View style={styles.detailedView}>
            <TouchableOpacity onPress={handlePress}>
                <Text>Back</Text>
            </TouchableOpacity>
            <View style={styles.item}>
                <Image source={{uri:headerMediaLink}}
                    style={styles.headerImage}
                />
                <View style={styles.info}>
                    <View style={styles.footerDetailed}>
                        <Text style={styles.cause}>{cause}</Text>
                        <Text style={styles.price}>{centsToEuro(price)}</Text>
                    </View>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.title}>Description</Text>
                    <Text>{description}</Text>
                    <Image source={{uri:avatarMedialink}}
                        style={styles.avatar}
                    />
                    <Text style={styles.title}>{userTitle}</Text>
                </View>
            </View>
      </View>
    );
  }