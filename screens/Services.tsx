import React from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import Why1 from "../assets/why-choose-1.svg";
import Why2 from "../assets/why-choose-2.svg";
import Why3 from "../assets/why-choose-3.svg";
import Why4 from "../assets/why-choose-4.svg";
import Graph from "../assets/graph.png";

export const Services = () => {
  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <View className="px-6 items-center mt-24">
          <Text className="text-blue-950 leading-tight text-[24px] text-center font-semibold">
            Por que você escolhe TheCoin
          </Text>
          <Text className="text-neutral-400 leading-tight text-[14px] text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing
          </Text>
        </View>

        <View className="w-[80%] mx-auto mt-12">
          <View className="items-center">
            <Why1 height={30} width={30} />
            <Text className="text-blue-950 leading-tight text-[18px] text-center font-semibold">
              Ótimo valor de mercado
            </Text>
            <Text className="text-blue-950 leading-6 mt-3 text-[14px] text-center ">
              Lorem ipsum dolor sit amet com consectetur adipisicing elit the
              help eiusmod tempor.
            </Text>
          </View>

          <View className="items-center mt-12">
            <Why2 height={30} width={30} />
            <Text className="text-blue-950 leading-tight text-[18px] text-center font-semibold">
              Processo de Mineração Verificado
            </Text>
            <Text className="text-blue-950 leading-6 mt-3 text-[14px] text-center">
              Lorem ipsum dolor sit amet com consectetur adipisicing elit the
              help eiusmod tempor.
            </Text>
          </View>

          <View className="items-center mt-12">
            <Why3 height={30} width={30} />
            <Text className="text-blue-950 leading-tight text-[18px] text-center font-semibold">
              Minerador mais rápido
            </Text>
            <Text className="text-blue-950 leading-6 mt-3 text-[14px] text-center">
              Lorem ipsum dolor sit amet com consectetur adipisicing elit the
              help eiusmod tempor.
            </Text>
          </View>

          <View className="items-center mt-12">
            <Why4 height={30} width={30} />
            <Text className="text-blue-950 leading-tight text-[18px] text-center font-semibold">
              Transação segura
            </Text>
            <Text className="text-blue-950 leading-6 mt-3 text-[14px] text-center">
              Lorem ipsum dolor sit amet com consectetur adipisicing elit the
              help eiusmod tempor.
            </Text>
          </View>

          
        </View>

        <View className="px-6 items-center mt-28">
            <View>
              <Text className="text-blue-950 leading-tight text-[24px] text-center font-semibold">
                Venda de investimento total da transação do ano passado
              </Text>
              <Text className="text-blue-950 leading-6 mt-10 text-[14px] text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed
                eiusmod tempor incididunt labore dolore magna aliqua minim Lorem
                ipsum dolor sit amet consectetur.
              </Text>
              <View className="mt-12 flex flex-row justify-around">
                <Pressable className="bg-gray-200 rounded px-6 py-3 uppercase text-[14px]">
                  <Text className="text-gray-400 text-center">Saber mais</Text>
                </Pressable>
              </View>
            </View>
          </View>

          <Image
            source={Graph}
            alt="Banner da Página"
            className="h-[170px] w-[280px] mx-auto mt-16"
          />
      </ScrollView>
    </>
  );
};
