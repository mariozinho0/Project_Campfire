import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

import PageHeader from '../../components/PageHeader';
import CampItem from '../../components/CampItem';

import styles from './styles';


function ToCamping() {

    return (
        <View style={styles.container}>
            <PageHeader/>
            <ScrollView>
                <CampItem/>
                <CampItem/>
                <CampItem/>
                <CampItem/>
                <CampItem/>
                <CampItem/>
                <CampItem/>
                <CampItem/>
                <CampItem/>
                <CampItem/>
                <CampItem/>
            </ScrollView>
        </View>
    );
}

export default ToCamping;