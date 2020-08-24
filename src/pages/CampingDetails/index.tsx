import React from 'react';
import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';

import { Ionicons } from '@expo/vector-icons';

import imgDetails from '../../assets/images/imagem01.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';


function CampingDetails() {

    const { goBack } = useNavigation();

    function handleGoback(){
        goBack();
    }

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <BorderlessButton onPress={handleGoback} style={styles.btnGoBack}>
                        <Ionicons name="md-arrow-round-back" size={30} color="#fff" />
                </BorderlessButton>
            </View>
            <View style={styles.imageDetails}>
                <Image source={imgDetails} style={styles.image}/>
            </View>
            <View style={styles.textDetails}>
                <Text style={styles.textName}>
                    Camping Party
                </Text>
                <Text style={styles.textAdress}>
                    Rodovia Presidente Castello Branco, km 25
                    Cotia - SP 
                </Text>
                <Text style={styles.textAbout}>
                    Sobre
                </Text>
                <Text style={styles.textAboutDetails}>
                    Acampamento aconchegante na beira do rio molhado, venha conferir e fazer suas madeixas 
                    de barraca conosco!
                </Text>
                <RectButton style={styles.btnWhatsapp}>
                    <Image source={whatsappIcon} style={styles.imageWhatsapp}/>
                    <Text style={styles.textWhatsapp}>
                        ENTRAR EM CONTATO
                    </Text>
                </RectButton>
            </View>
        </View>
    );
}

export default CampingDetails;