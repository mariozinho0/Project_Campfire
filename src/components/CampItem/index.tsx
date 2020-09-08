import React from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import ImgCard from '../../assets/images/imagem01.png'

import styles from './styles';

export interface Camp {
    city: string,
    contact: number,
    description: string,
    id: number,
    name: string,
    state: string
    address: string
    imageUrl: string
}


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
                        camp.imageUrl == null 
                        ? ImgCard 
                        : {uri: camp.imageUrl}
                        } style={styles.images} />
                </View>
                <View style={styles.cardText}>
                    <Text style={styles.textTitle}>
                        {camp.name}
                    </Text>
                    <Text style={styles.textAdress}>
                        {camp.address}
                        {'\n'}{'\n'}
                        {camp.city} - {camp.state}
                    </Text>
                </View>
            </RectButton>
        </View>
    );
}

export default CampItem;