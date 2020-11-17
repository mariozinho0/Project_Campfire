import React, { useState } from "react";
import { View, Text, Alert } from "react-native";
import {
  BorderlessButton,
  TextInput,
  RectButton,
} from "react-native-gesture-handler";

import { AutoGrowingTextInput } from "react-native-autogrow-textinput";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-community/picker";

import styles from "./styles";
import api from "../../utils/api";
import InputMask from "../../components/InputMask";
import { Camp } from "../../models/CampModel";
import { Controller, useForm } from "react-hook-form";


// stados uf
const states = [
  "SP",
  "AC",
  "AL",
  "AM",
  "AP",
  "BA",
  "CE",
  "DF",
  "ES",
  "GO",
  "MA",
  "MG",
  "MS",
  "MT",
  "PA",
  "PB",
  "PE",
  "PI",
  "PR",
  "RJ",
  "RN",
  "RO",
  "RR",
  "RS",
  "SC",
  "SE",
  "TO",
];


function CampingRegister() {
  const { control, handleSubmit, errors } = useForm();
  const { goBack } = useNavigation();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [contact, setContact] = useState('');
  const [stateUf, setStateUf] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [image, setImage] = useState('');
  const [stateSelect, setStateSelect] = useState(false)


  function handleCustom(value: string) {
    setContact(value);
  }

  // retornar para a tela anterior
  function handleGoback() {
    goBack();
  }

  // registrar dados
  function onSubmit(data: Camp) {
    console.log(data)

    // enviando para o back
    api.post('campings', data).then((response) => {
      Alert.alert(
        "Dados cadastrados!",
        `Camp ${data.name} cadastrados com sucesso!`,
        [
          {
            text: "Inicio",
            onPress: () => {
              handleGoback();
            },
          },
        ]
      );
    }).catch((error) => {
      console.log(error)
      Alert.alert(
        "Ops...",
        `Ocorreu um erro, tente novamente mais tarde...`,
        [
          {
            text: "Inicio",
            onPress: () => {
              handleGoback();
            },
          },
        ]
      );
    })
  }


  return (
    <KeyboardAwareScrollView style={styles.container}>
      <BorderlessButton onPress={handleGoback} style={styles.btnGoBack}>
        <Ionicons name="md-arrow-round-back" size={30} color="#fff" />
      </BorderlessButton>

      <View style={styles.formRegister}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Nome do local</Text>
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                placeholder="Digite o nome do local..."
                onChangeText={value => onChange(value)}
                value={value}
              />
            )}
            rules={{required: true}}
            name="name"
            defaultValue=""
          />
          {errors.name && <Text style={styles.error}>Campo obrigatório</Text>}
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Cidade</Text>
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                placeholder="Digite a cidade..."
                onChangeText={value => onChange(value)}
                value={value}
              />
            )}
            rules={{required: true}}
            name="location.city"
            defaultValue=""
          />
          {errors.city && <Text style={styles.error}>Campo obrigatório</Text>}
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Estado</Text>
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <Picker
                onValueChange={value => onChange(value)}
                selectedValue={value}
              >
                <Picker.Item key="-1" label="Selecione um estado" value="" />
                {states.map((uf) => {
                  return <Picker.Item key={uf.toString()} label={uf} value={uf} />;
                })}
              </Picker>
            )}
            rules={{required: true}}
            name="location.state"
            defaultValue="Selecione um estado"
          />
          {errors.state && <Text style={styles.error}>Campo obrigatório</Text>}
        </View>


        <View style={styles.inputGroup}>
          <Text style={styles.label}>Endereço</Text>
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                placeholder="Digite o endereço..."
                onChangeText={value => onChange(value)}
                value={value}
              />
            )}
            rules={{required: true}}
            name="location.address"
            defaultValue=""
          />
          {errors.address && <Text style={styles.error}>Campo obrigatório</Text>}
        </View>



        <View style={styles.inputGroup}>
          <Text style={styles.label}>Whatsapp</Text>
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                maxLength={11}
                placeholder="(xx) xxxxx-xxxx"
                keyboardType="numeric"
                onChangeText={value => onChange(value)}
                value={value}
              />
            )}
            rules={{required: true }}
            name="contact"
            defaultValue=""
          />
          {errors.contact && <Text style={styles.error}>Campo obrigatório</Text>}
        </View>


        <View style={styles.inputGroup}>
          <Text style={styles.label}>Descrição</Text>
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <AutoGrowingTextInput
                onBlur={onBlur}
                multiline={true}
                numberOfLines={4}
                style={styles.input}
                placeholder="Fale sobre seu camping..."
                onChangeText={(value: string) => onChange(value)}
                value={value}
              />
            )}
            rules={{required: true}}
            name="description"
            defaultValue=""
          />
          {errors.description && <Text style={styles.error}>Campo obrigatório</Text>}
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>URL da imagem</Text>
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                placeholder="http://"
                onChangeText={value => onChange(value)}
                value={value}
              />
            )}
            rules={{required: true}}
            name="image"
            defaultValue=""
          />
          {errors.image && <Text style={styles.error}>Campo obrigatório</Text>}
        </View>


        <RectButton
          style={styles.button}
          onPress={handleSubmit(onSubmit)}
        >
          <Text style={styles.textButton}>Cadastrar</Text>
        </RectButton>

        <View style={styles.padding}>
        </View>
      </View>
    </KeyboardAwareScrollView >
  );
}

export default CampingRegister;
