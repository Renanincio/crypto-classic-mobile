import React from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Banner from "../assets/banner-1.png";

export const Start = () => {
  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <View className="px-6 items-center mt-28">
          <View>
            <Text className="text-blue-950 leading-tight text-[24px] text-center font-semibold">
              Bem-vindo ao próximo nível de Token de Criptomoedas com
              transferência mais rápida
            </Text>
            <Text className="text-blue-950 leading-6 mt-10 text-[14px] text-center">
              Ajudamos marcas e agências a gerenciar programas de
              influenciadores de alto desempenho: descoberta e qualificação de
              talentos, gerenciamento de relacionamento, relatórios de campanha
              automatizados, medição de desempenho e benchmarking competitivo.
            </Text>
            <View className="mt-12 flex flex-row justify-around">
              <Pressable className="bg-black rounded-2xl px-10 py-4 uppercase text-[14px]">
                <Text className="text-white text-center">Obter Token</Text>
              </Pressable>
              <Pressable className="text-black uppercase flex flex-row justify-center items-center text-[14px]">
                <Text>Papel Branco</Text>
                <AntDesign name="play" size={16} color="black" />
              </Pressable>
            </View>
          </View>
        </View>

        <Image
          source={Banner}
          alt="Banner da Página"
          className="h-[170px] w-[280px] mx-auto mt-16"
        />
      </ScrollView>
    </>
  );
};
