import React from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import ImgCard from '../../assets/images/imagem01.png';

import styles from './styles';



function CampItem() {

    const { navigate } = useNavigation();

    function handleNavigateDetails() {
        navigate('CampingDetails');
    }

    return (
        <View style={styles.container}>
            <RectButton style={styles.cardItem} onPress={handleNavigateDetails}>
                <View style={styles.cardImage}>
                    <Image source={ImgCard} style={styles.images} />
                </View>
                <View style={styles.cardText}>
                    <Text style={styles.textTitle}>
                        Camping Party
                    </Text>
                    <Text style={styles.textAdress}>
                        Rodovia Presidente Castello Branco, km 25
                        {'\n'}{'\n'}
                        Cotia-SP
                    </Text>
                </View>
            </RectButton>
        </View>
    );
}

export default CampItem;