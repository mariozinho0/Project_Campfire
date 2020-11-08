import React from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import ImgCard from '../../assets/images/imagem01.png'

import styles from './styles';
import { Camp } from '../../models/CampModel';


interface CampItemProps {
    camp: Camp
}

const CampItem: React.FC<CampItemProps> = ({ camp }) => {

    const { navigate } = useNavigation();

    function handleNavigateDetails() {
        navigate('CampingDetails', { data: camp } );
    }

    return (
        <View style={styles.container}>
            <RectButton style={styles.cardItem} onPress={handleNavigateDetails}>
                <View style={styles.cardImage}>
                    <Image source={
                        camp.image == null 
                        ? ImgCard 
                        : {uri: camp.image}
                        } style={styles.images} />
                </View>
                <View style={styles.cardText}>
                    <Text style={styles.textTitle}>
                        {camp.name}
                    </Text>
                    <Text style={styles.textAdress}>
                        {camp.location.address}
                        {'\n'}{'\n'}
                        {camp.location.city} - {camp.location.state}
                    </Text>
                </View>
            </RectButton>
        </View>
    );
}

export default CampItem;