import React from 'react';
import { ScrollView, Text, View, Pressable } from 'react-native';

export const Contact = () => {
  return (
    <>
    <ScrollView showsVerticalScrollIndicator={false} 
>
<View
        className="bg-black h-screen items-center justify-center w-full px-6"
      >
        <Text className="text-white mt-16 font-bold text-[24px]">
          Quer falar com nossa equipe de suporte?
        </Text>
        <Text className="text-white my-16 text-[14px] text-center">
          Descubra como a equipe pode ajudá-lo a potencializar seu
           programa de marketing de fotos de influenciadores.
        </Text>

        <View>
          <Pressable className="rounded bg-white  py-3 px-6">
            <Text className='text-[14px] text-black font-bold'>
            Faça sua pergunta
            </Text>
          </Pressable>
          </View>
      </View>
      
    </ScrollView>
    </>
  )
}