import { View, Text, SafeAreaView, Image } from 'react-native'
import React, { useLayoutEffect } from 'react';
import { useNavigation } from "@react-navigation/native";
import { ChevronDownIcon, UserIcon } from "react-native-heroicons/outline";


const  HomeScreen = () => {

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  })


  return (
    <SafeAreaView className="bg-white ">
      <Text>
        {/* Header */}

        <View className="flex-row pb-3 items-center mx-4 space-x-2">
          <Image
            source={{
              uri: "https://links.papareact.com/wru",
            }}
            className="h-8 w-8 bg-gray-300 p-4 rounded-full"
          />

          <View>
            <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
            <Text className="font-bold text-xl">
              Current location
              <ChevronDownIcon size={20} color="#00ccbb" />
            </Text>
          </View>

          <UserIcon size={35} color="#00ccbb" />
        </View>
      </Text>
    </SafeAreaView>
  );
}


export default HomeScreen;