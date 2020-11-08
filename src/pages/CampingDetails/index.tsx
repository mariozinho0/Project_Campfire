import React from "react";
import { View, Image, Text, Linking, Route } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";

import { Ionicons } from "@expo/vector-icons";

import whatsappIcon from "../../assets/images/icons/whatsapp.png";
import ImgCard from "../../assets/images/imagem01.png";

import styles from "./styles";
import { Camp } from "../../models/CampModel";


function CampingDetails({ route }: Route) {
  const { goBack } = useNavigation();

  function handleGoback() {
    goBack();
  }

  // enviando mensagem no whats
  function handleWhats() {
    Linking.openURL(`whatsapp://send?phone=${data.contact}`);
  }
  
  // pegando dados do parametro
  const data: Camp = route.params.data

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BorderlessButton onPress={handleGoback} style={styles.btnGoBack}>
          <Ionicons name="md-arrow-round-back" size={30} color="#fff" />
        </BorderlessButton>
      </View>

      <View style={styles.imageDetails}>
        <Image
          source={data.image == null ? ImgCard : { uri: data.image }}
          style={styles.image}
        />
      </View>
      <View style={styles.textDetails}>
        <Text style={styles.textName}>{data.name}</Text>
        <Text style={styles.textAdress}>
          {data.location.address}
          {`\n`}
          {`\n`}
          {data.location.city} - {data.location.state}
        </Text>
        <Text style={styles.textAbout}>Sobre</Text>
        <Text style={styles.textAboutDetails}>{data.description}</Text>
        <RectButton style={styles.btnWhatsapp} onPress={handleWhats}>
          <Image source={whatsappIcon} style={styles.imageWhatsapp} />
          <Text style={styles.textWhatsapp}>ENTRAR EM CONTATO</Text>
        </RectButton>
      </View>
    </View>
  );
}

export default CampingDetails;
