import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { BorderlessButton, TextInput } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import InputMask from '../../components/InputMask';


import styles from './styles';



function CampingRegister() {

    const [phone, setPhone] = useState();

    function handleCustom(value: string) {
        setPhone(value);
    }

    const { goBack } = useNavigation();

    function handleGoback(){
        goBack();
    }

    return (
        <View style={styles.container}>
            <BorderlessButton onPress={handleGoback} style={styles.btnGoBack}>
                <Ionicons name="md-arrow-round-back" size={30} color="#fff" />
            </BorderlessButton>
            <View style={styles.formRegister}>
                <Text style={styles.textHeader}>
                    Cadastrar Camping
                </Text>
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>
                        Nome do local
                    </Text>
                    <TextInput style={styles.input} placeholder="Digite o nome do local..."/>
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>
                        Estado
                    </Text>
                    <TextInput style={styles.input} placeholder="Digite o estado..."/>
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>
                        Cidade
                    </Text>
                    <TextInput style={styles.input} placeholder="Digite a cidade..."/>
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>
                        Endereço
                    </Text>
                    <TextInput style={styles.input} placeholder="Digite o endereço completo..."/>
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>
                        Whatsapp
                    </Text>
                    <InputMask maxLength={15} value={phone} mask="phone" inputMaskChange={(text: string) => handleCustom(text)} />
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>
                        Sobre
                    </Text>
                    <TextInput multiline={true} numberOfLines={4} style={styles.input} placeholder="Fale sobre seu camping..."/>
                </View>
            </View>
        </View>
    );
}

export default CampingRegister;