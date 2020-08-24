import React from 'react';
import { View, ImageBackground, Image, Text }  from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import { Ionicons } from '@expo/vector-icons';

import backgroundLogin from '../../assets/images/background01.png';
import logoImg from '../../assets/images/logo.png';

import styles from './styles';


function LandingPage() {

    const { navigate } = useNavigation();

    function handleNavigateToCampingPage() {
        navigate('ToCamping');
    }

    function handleNavigateToCampingRegister() {
        navigate('CampingRegister');
    }

    return (
        <ImageBackground resizeMode="contain" source={backgroundLogin} style={styles.content}>
            <View style={styles.container}>
                <Image source={logoImg} style={styles.logo} />
                <Text style={styles.textTitle}>
                    Seja bem vindo! {'\n'}
                    <Text style={styles.textTitleBold}>
                        O que deseja fazer?
                    </Text>
                </Text>
                <View style={styles.buttonsContainer}>
                    <RectButton onPress={handleNavigateToCampingPage} style={[styles.button, styles.buttonPrimary]}>
                        <Text style={styles.textButton}>
                            Quero acampar
                        </Text>
                        <Ionicons style={[styles.btnIcon, {transform: [{ rotateX: "-20deg" },{ rotateZ: "-20deg" }]}]} name="md-flag" size={30} color="#fff" />
                    </RectButton>
                    <RectButton style={[styles.button, styles.buttonSecondary]} onPress={handleNavigateToCampingRegister}>
                        <Text style={styles.textButton}>
                            Divulgar camping
                        </Text>
                        <Ionicons style={styles.btnIcon} name="md-bonfire" size={30} color="#fff" />
                    </RectButton>
                </View>
            </View>
        </ImageBackground>
    );
}

export default LandingPage;