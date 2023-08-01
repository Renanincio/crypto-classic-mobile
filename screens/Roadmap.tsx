import React from "react";
import { ScrollView, Text, View, Pressable, Image } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import Countdown from "../assets/countdown.png";
import Spain from "../assets/spain-flag.svg";
import SouthAfrica from "../assets/south-africa-flag.svg";
import Uk from "../assets/uk-flag.svg";
import Map from "../assets/map.png";

export const Roadmap = () => {
  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <View className="px-6 items-center mt-3">
          <View className="px-6 items-center mt-16">
            <Text className="text-blue-950 leading-tight text-[24px] text-center font-semibold">
              Conheça o Roteiro
            </Text>
            <Text className="text-neutral-400 leading-tight text-[14px] text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing
            </Text>
          </View>

          <View className="w-[80%] mx-auto mt-12">
            <View className="items-center">
              <Text className="text-gray-400 leading-6 mt-3 text-[14px] text-center">
                29 de janeiro de 2019
              </Text>
              <FontAwesome5 name="dot-circle" size={24} color="lightgray" />
              <Text className="text-blue-950 leading-tight text-[18px] text-center font-semibold">
                Junte-se a um novo servidor de hospedagem
              </Text>
              <Text className="text-blue-950 leading-6 mt-3 text-[14px] text-center ">
                Lorem ipsum dolor sit amet com consectetur adipisicing elit the
                help eiusmod tempor.
              </Text>
            </View>

            <View className="items-center mt-12">
              <Text className="text-gray-400 leading-6 mt-3 text-[14px] text-center">
                17 de abril de 2019
              </Text>
              <FontAwesome5 name="dot-circle" size={24} color="lightgray" />
              <Text className="text-blue-950 leading-tight text-[18px] text-center font-semibold">
                Moeda de mineração com gpu mais recente
              </Text>
              <Text className="text-blue-950 leading-6 mt-3 text-[14px]  text-center ">
                Lorem ipsum dolor sit amet com consectetur adipisicing elit the
                help eiusmod tempor.
              </Text>
            </View>

            <View className="items-center mt-12">
              <Text className="text-gray-400 leading-6 mt-3 text-[14px]  text-center ">
                31 de outubro de 2019
              </Text>
              <FontAwesome5 name="dot-circle" size={24} color="lightgray" />
              <Text className="text-blue-950 leading-tight text-[18px] text-center font-semibold">
                Vire novo site com design
              </Text>
              <Text className="text-blue-950 leading-6 mt-3 text-[14px]  text-center ">
                Lorem ipsum dolor sit amet com consectetur adipisicing elit the
                help eiusmod tempor.
              </Text>
            </View>
          </View>

          <View className="mt-28">
            <Text className="text-blue-950 leading-tight text-[24px] text-center font-semibold">
              Assuma o controle de seu crédito e identidade.
            </Text>
            <Text className="text-blue-950 leading-6 mt-10 text-[14px]  text-center ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit sed
              eiusmod tempor incididunt labore dolore magna aliqua minim Lorem
              ipsum dolor sit amet consectetur.
            </Text>
            <Text className="text-blue-950 font-bold text-[24px] text-center my-12">
              11 23 44 20
            </Text>
            <View className="flex flex-row justify-around">
              <Pressable className="bg-black rounded-2xl px-10 py-4 uppercase text-[14px]">
                <Text className="text-white text-center">Comprar Fichas</Text>
              </Pressable>
            </View>
          </View>

          <Image
            source={Countdown}
            alt="Banner da Página"
            className="h-[170px] w-[280px] mx-auto mt-16"
          />
        </View>

        <View className="flex px-6 flex-col items-center mt-24">
          <Text className="text-blue-950 leading-tight text-[24px] text-center font-semibold">
            imagem Temos mais de 3 bilhões de usuários em todo o mundo
          </Text>
          <Text className="text-blue-950 leading-tight text-[14px] text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod
            tempor incididunt labore dolore
          </Text>
        </View>

        <View>
          <Text className="text-blue-950 leading-tight text-[16px] text-center font-semibold my-12">
            Jurisdições de jogos de azar licenciados
          </Text>

          <View className="items-center">
            <Uk width={30} height={30} />
            <Text className="text-blue-950 leading-tight text-[14px] text-center">
              Reino Unido
            </Text>
          </View>
          <View className="items-center my-6">
            <SouthAfrica width={30} height={30} />
            <Text className="text-blue-950 leading-tight text-[14px] text-center">
              África do Sul
            </Text>
          </View>
          <View className="items-center">
            <Spain width={30} height={30} />
            <Text className="text-blue-950 leading-tight text-[14px] text-center">
              Espanha
            </Text>
          </View>

          <Image
            source={Map}
            alt="Um mapa"
            className="w-full h-[240px] mt-10"
          />
        </View>
      </ScrollView>
    </>
  );
};
