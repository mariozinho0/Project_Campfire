import React, { useState, useEffect, ReactNode } from "react";
import { View, Image, Text, Linking, Route } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";

import { Ionicons } from "@expo/vector-icons";

import whatsappIcon from "../../assets/images/icons/whatsapp.png";
import ImgCard from "../../assets/images/imagem01.png";

import styles from "./styles";

import { Camp } from "../../components/CampItem";

interface CampingDetailsProps {
  campingDetails: Camp;
}

function CampingDetails({ route }: Route) {
  const { goBack } = useNavigation();

  function handleGoback() {
    goBack();
  }

  // enviando mensagem no whats
  function handleWhats() {
    Linking.openURL(`whatsapp://send?phone=${contact}`);
  }
  const {
    city,
    contact,
    description,
    name,
    state,
    imageUrl,
    address,
  } = route.params.data;

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BorderlessButton onPress={handleGoback} style={styles.btnGoBack}>
          <Ionicons name="md-arrow-round-back" size={30} color="#fff" />
        </BorderlessButton>
      </View>

      <View style={styles.imageDetails}>
        <Image
          source={imageUrl == null ? ImgCard : { uri: imageUrl }}
          style={styles.image}
        />
      </View>
      <View style={styles.textDetails}>
        <Text style={styles.textName}>{name}</Text>
        <Text style={styles.textAdress}>
          {address}
          {`\n`}
          {`\n`}
          {city} - {state}
        </Text>
        <Text style={styles.textAbout}>Sobre</Text>
        <Text style={styles.textAboutDetails}>{description}</Text>
        <RectButton style={styles.btnWhatsapp} onPress={handleWhats}>
          <Image source={whatsappIcon} style={styles.imageWhatsapp} />
          <Text style={styles.textWhatsapp}>ENTRAR EM CONTATO</Text>
        </RectButton>
      </View>
    </View>
  );
}

export default CampingDetails;
