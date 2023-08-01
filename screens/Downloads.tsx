import React from "react";
import { ScrollView, Text, Image, Pressable, View } from "react-native";
import OurWallet from "../assets/our-wallet.png";
import Wallet1 from "../assets/wallet-1.svg";
import Wallet2 from "../assets/wallet-2.svg";
import Wallet3 from "../assets/wallet-3.svg";
import WalletApple from "../assets/wallet-apple.png";
import WalletGoogle from "../assets/wallet-google.png";

export const Downloads = () => {
  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 32 }}
      >
        <View className=" mt-16 px-3 items-center">
          <Image
            className="h-[350px] w-[280px] my-12"
            source={OurWallet}
            alt="Imagem ilustrativa de apresentação"
          />
          <View className="text-center">
            <Text className="text-blue-950 leading-tight text-[24px] text-center">
              Nossa carteira é integrada para os clientes de criptomoedas
            </Text>
            <Text className="text-blue-950 leading-tight mt-10 text-[14px] text-center">
              É uma grande dor para se livrar da dor, mas ao mesmo tempo, há
              muita dor.
            </Text>

            <View className="mt-16">
              <View className="items-center">
                <Wallet1 width={30} height={30} />
                <Text className="text-blue-950 text-[14px] text-center">
                  Transferências seguras com cassinos verificados.
                </Text>
              </View>

              <View className="items-center my-10">
                <Wallet2 width={30} height={30} />
                <Text className="text-blue-950 text-[14px] text-center">
                  Compre e venda facilmente CLV dentro da carteira.
                </Text>
              </View>

              <View className="items-center">
                <Wallet3 width={30} height={30} />
                <Text className="text-blue-950 text-[14px] text-center">
                  Pague a gasolina em CLV.
                </Text>
              </View>
            </View>
            <View className="flex-row justify-center mt-16 font-bold">
              <Pressable className="bg-black rounded flex-row px-6 py-3 items-center">
                <Image source={WalletApple} alt="Logo da Apple" />

                <Text className="text-[14px] ml-3 text-white">Loja de aplicativos</Text>
              </Pressable>
              <Pressable className="bg-black flex-row rounded px-6 py-3 items-center ml-2">
                <Image source={WalletGoogle} alt="Logo da Google" />

                <Text className="text-[14px] ml-3 text-white">Loja de jogos</Text>
              </Pressable>
            </View>

            <Text className="text-neutral-400 mt-8 text-[12px]">
              *Aplicativo do Windows em breve
            </Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
};
