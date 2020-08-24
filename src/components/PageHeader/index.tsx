import React, { useState } from 'react';
import { View, Image, Text, TextInput } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


import { Ionicons } from '@expo/vector-icons';

import styles from './styles';


function PageHeader() {

    const [isFilterVisible, setIsFilterVisible] = useState(false);

    function handleToggleFilterVisible() {
        setIsFilterVisible(!isFilterVisible);
    }

    const { goBack } = useNavigation();

    function handleGoback(){
        goBack();
    }

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <BorderlessButton onPress={handleGoback}>
                    <Ionicons name="md-arrow-round-back" size={30} color="#fff" />
                </BorderlessButton>
            </View>
            <View style={styles.title}>
                <Text style={styles.textTitle}>
                    Resultados: {'\n'}
                    <Text style={styles.textCount}>
                        3 Campings encontrados
                    </Text>
                </Text>
                <RectButton onPress={handleToggleFilterVisible} style={styles.btnFilter}>
                    <Text style={styles.textFilter}>
                        Filtrar
                    </Text>
                    <Ionicons name="md-funnel" size={24} color="#fff" />
                </RectButton>
            </View>
            {isFilterVisible && (
                <View style={styles.inputGroup}>
                    <View style={styles.inputBlock}>
                        <Text style={styles.textInput}>
                            Cidade
                        </Text>
                        <TextInput style={styles.input} placeholder="Qual a cidade?"/>
                    </View>

                    <View style={styles.inputBlock}>
                        <Text style={styles.textInput}>
                            Estado
                        </Text>
                        <TextInput style={styles.input} placeholder="Qual o estado?"/>
                    </View>
                </View>
            )}
        </View>
    );
}

export default PageHeader;