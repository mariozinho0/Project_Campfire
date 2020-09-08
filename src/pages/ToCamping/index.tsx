import React, { useState, useEffect } from "react";
import { View, Text, Alert, ActivityIndicator } from "react-native";
import {
  ScrollView,
  RectButton,
  TextInput,
} from "react-native-gesture-handler";

import PageHeader from "../../components/PageHeader";
import { Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-community/picker";
import CampItem, { Camp } from "../../components/CampItem";

import styles from "./styles";
import api from "../../utils/api";

const states = [
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
  "SP",
];

function ToCamping() {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");
  const [loading, setLoading] = useState(true);
  const [camps, setCamps] = useState([]);
  const [campsTotal, setCampsTotal] = useState(0);

  function handleToggleFilterVisible() {
    setIsFilterVisible(!isFilterVisible);
  }

  // filtrando dados
  function filterSubmit() {
    if (uf == "" && city == "") {
      Alert.alert(
        "Ops...",
        `Selecione uma cidade ou estado`,

        [{ text: "Voltar", onPress: () => loadAllCamps }]
      );
    }
    api
      .get("/campings", {
        params: {
          ...(uf ? { state: uf } : {}),
          ...(city ? { city } : {}),
        },
      })
      .then(function (res) {
        // console.log(res)
        if (res.data == "") {
          Alert.alert(
            "Ops...",
            `Sua busca não retornou dados!`,
            [
              {
                text: "Listar todos...",
                onPress: () => {
                  loadAllCamps;
                  setIsFilterVisible(false);
                },
              },
            ]
          );
        } else {
          setCamps(res.data);
          setCampsTotal(res.data.length);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  // buscando e listando dados
  async function loadAllCamps() {
    // pegando dados da api
    const { data } = await api.get("campings");
    // passando os valores para o array
    setCamps(data);
    // qnt de camps
    setCampsTotal(data.length);
    setLoading(false);
  }

  // carrega os dados no load da tela
  useEffect(() => {
    loadAllCamps();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="small" style={{ flex: 1 }} />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <PageHeader>
          <View style={styles.title}>
            <Text style={styles.textTitle}>
              Resultados: {"\n"}
              <Text style={styles.textCount}>
                {campsTotal <= 1
                  ? `${campsTotal} Camping encontrado`
                  : `${campsTotal} Campings encontrados`}
              </Text>
            </Text>
            <RectButton
              onPress={handleToggleFilterVisible}
              style={styles.btnFilter}
            >
              <Text style={styles.textFilter}>Filtrar</Text>
              <Ionicons name="md-funnel" size={24} color="#fff" />
            </RectButton>
          </View>
          {isFilterVisible && (
            <View>
              <View style={styles.inputGroup}>
                <View style={styles.inputBlock}>
                  <Text style={styles.textInput}>Cidade</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={(city) => setCity(city)}
                    placeholder="Qual a cidade?"
                  />
                </View>

                <View style={styles.inputBlock}>
                  <Text style={styles.textInput}>Estado</Text>

                  <Picker
                    selectedValue={uf}
                    onValueChange={(uf) => {uf == '' ? loadAllCamps()  : setUf(uf) }}
                    style={{height: 50, width: 100}}
                  >
                    {states.map((uf) => {
                      return <Picker.Item key={uf} label={uf} value={uf} />;
                    })}
                  </Picker>
                </View>
              </View>
              <RectButton onPress={filterSubmit} style={styles.btnFilter}>
                <Text style={styles.textFilter}>Pesquisar</Text>
                <Ionicons name="ios-search" size={24} color="#fff" />
              </RectButton>
            </View>
          )}
        </PageHeader>

        <ScrollView>
          {camps.map((camp: Camp) => {
            return <CampItem key={camp.id} camp={camp} />;
          })}
        </ScrollView>
      </View>
    );
  }
}

export default ToCamping;
