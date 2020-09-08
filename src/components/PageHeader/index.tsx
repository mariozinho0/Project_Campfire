import React, { useState, useEffect, ReactNode } from 'react';
import { View, Text, TextInput } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


import { Ionicons } from '@expo/vector-icons';

import styles from './styles';


interface IProps {
    children: ReactNode
    // elementos filhos tem um tipo qualquer
}

const PageHeader = ({ children } : IProps) => {

    const { goBack } = useNavigation();

    function handleGoback() {
        goBack();
    }

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <BorderlessButton onPress={handleGoback}>
                    <Ionicons name="md-arrow-round-back" size={30} color="#fff" />
                </BorderlessButton>
            </View>
            {children}
        </View>
    );
}

export default PageHeader;