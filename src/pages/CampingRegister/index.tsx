import React, { useState } from "react";
import { View, Text, ActivityIndicator, Alert } from "react-native";
import {
  BorderlessButton,
  TextInput,
  RectButton,
} from "react-native-gesture-handler";

import { AutoGrowingTextInput } from "react-native-autogrow-textinput";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-community/picker";
import * as yup from "yup";
import { Formik } from "formik";

import styles from "./styles";
import api from "../../utils/api";
import InputMask from "../../components/InputMask";
import { removeMask } from "../../utils/masks";
import CampItem, { Camp } from "../../components/CampItem";

interface Iimg {
  uri: string;
  type: string;
}

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
  const [city, setCity] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [uf, setUf] = useState("");
  const [address, setAdress] = useState("");
  const [image, setImage] = useState<Iimg>();

  const [phone, setPhone] = useState("");
  function handleCustom(value: string) {
    setPhone(value);
  }

  const { goBack } = useNavigation();
  function handleGoback() {
    goBack();
  }
  // registrar dados
  function registerCamp(data: Camp) {
    const obj = {
      state: data.state,
      name: data.name,
      city: data.city,
      description: data.description,
      address: data.address,
      contact: data.contact,
    };

    if(image == null) {
      alert("Imagem Obrigatória")
    } else {
      api
      .post("campings", obj)
      .then((res) => {
        let isUpload = uploadImage(res.data, image);
        if (isUpload) {
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
        } else {
          alert("Ocorreu um erro aqui")
        }
      })
      .catch((error) => {
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
      });
    }
  }

  // pegar a imagem
  async function imagePicker() {
    const data = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });
    if (data.cancelled) {
      return console.log("Cancelado");
    }
    if (!data.uri) {
      return console.log("Erro uri");
    }
    if (data == null) {
      return false;
    } else {
      // pega as informações da imagem
      let localUri = data.uri;
      let fileName = localUri.split("/").pop();

      let match = /\.(\w+)$/.exec(fileName);
      let type = match ? `image/${match[1]}` : `image`;

      // cria o objeto com as informações da imagem
      let objImg = {
        uri: localUri,
        name: fileName,
        type,
      };
      
      // retorna a imagem
      setImage(objImg);
    }
  }

  // enviar a imagem
  async function uploadImage(idCamp: any, objImage: any) {
    // form para envio
    const formData = new FormData();
    formData.append("file", objImage);
    try {
      // enviando para o back end
      const res = await api.post(`images?campingId=${idCamp.id}`, formData, {
        method: "post",
        headers: {
          "Content-Type": `multipart/form-data;`,
        },
      });
      // verifica se foi enviado
      if (res.status == 201) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error)
    }
  }

  const validationSchema = yup.object().shape({
    name: yup.string().required("Campo obrigatório").label("Name"),
    state: yup.string().required("Campo obrigatório").label("State"),
    city: yup.string().required("Campo obrigatório").label("City"),
    address: yup.string().required("Campo obrigatório").label("Address"),
    contact: yup.string().required("Campo obrigatório").label("Contact"),
    description: yup
      .string()
      .required("Campo obrigatório")
      .label("Description"),
  });

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <BorderlessButton onPress={handleGoback} style={styles.btnGoBack}>
        <Ionicons name="md-arrow-round-back" size={30} color="#fff" />
      </BorderlessButton>

      <View style={styles.formRegister}>
        <Formik
          initialValues={{
            name: "",
            state: "SP",
            city: "",
            address: "",
            contact: "",
            description: "",
          }}
          onSubmit={(values: any, actions) => {
            // registra o camp
            registerCamp(values);

            setTimeout(() => {
              actions.setSubmitting(false);
            }, 1000);
          }}
          validationSchema={validationSchema}
        >
          {(formikProps) => (
            <>
              <View style={styles.inputGroup}>
                <Text style={styles.label}>Nome do local</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Digite o nome do local..."
                  onChangeText={formikProps.handleChange("name")}
                />
                <Text style={{ color: "red" }}>{formikProps.errors.name}</Text>
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Estado</Text>
                <View style={styles.input}>
                  <Picker
                    // passando valor diretamente para o formikProps
                    selectedValue={formikProps.values.state}
                    // mudando o valor no formikProps
                    onValueChange={(itemValue) => {
                      formikProps.setFieldValue("state", itemValue),
                        setUf(itemValue);
                    }}
                    style={styles.input}
                  >
                    {states.map((uf) => {
                      return <Picker.Item key={uf} label={uf} value={uf} />;
                    })}
                  </Picker>
                </View>
                <Text style={{ color: "red" }}>{formikProps.errors.state}</Text>
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Cidade</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Digite a cidade..."
                  onChangeText={formikProps.handleChange("city")}
                />
                <Text style={{ color: "red" }}>{formikProps.errors.city}</Text>
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Endereço</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Digite o endereço completo..."
                  onChangeText={formikProps.handleChange("address")}
                />
                <Text style={{ color: "red" }}>
                  {formikProps.errors.address}
                </Text>
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Whatsapp</Text>
                <TextInput
                  maxLength={11}
                  placeholder="(xx) xxxxx-xxxx"
                  keyboardType="numeric"
                  onChangeText={formikProps.handleChange("contact")}
                  style={styles.input}
                />

                <Text style={{ color: "red" }}>
                  {formikProps.errors.contact}
                </Text>
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Sobre</Text>
                <AutoGrowingTextInput
                  multiline={true}
                  numberOfLines={4}
                  style={styles.input}
                  placeholder="Fale sobre seu camping..."
                  onChangeText={formikProps.handleChange("description")}
                />
                <Text style={{ color: "red" }}>
                  {formikProps.errors.description}
                </Text>
              </View>

              <RectButton style={styles.button} onPress={imagePicker}>
                <Text style={styles.textButton}>
                  {image?.uri == null
                    ? "Upload de imagem"
                    : "Imagem selecionada!"}
                </Text>
              </RectButton>

              {formikProps.isSubmitting ? (
                <ActivityIndicator />
              ) : (
                <RectButton
                  style={styles.button}
                  onPress={formikProps.handleSubmit}
                >
                  <Text style={styles.textButton}>Cadastrar</Text>
                </RectButton>
              )}
            </>
          )}
        </Formik>
        <View style={styles.padding}>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}

export default CampingRegister;
