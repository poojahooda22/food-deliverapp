import { View, Text, SafeAreaView, Image, TextInput } from 'react-native'
import React, { useLayoutEffect } from 'react';
import { useNavigation } from "@react-navigation/native";
import { ChevronDownIcon, UserIcon, SearchIcon, AdjustmentsIcon } from "react-native-heroicons/outline";


const  HomeScreen = () => {

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  })


  return (
    <SafeAreaView className="bg-white pt-8">
      
        {/* Header */}

          <View className="flex-row pb-3 items-center mx-4 space-x-2">
            <Image
              source={{
                uri: "https://links.papareact.com/wru",
              }}
              className="h-8 w-8 bg-gray-300 p-4 rounded-full"
            />

            <View className="flex-1">
              <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
              <Text className="font-bold text-xl">
                Current location
                <ChevronDownIcon size={20} color="#00ccbb" />
              </Text>
            </View>

            <UserIcon size={32} color="#00ccbb" />
          </View>


        {/* Search */}
        <View className="flex-row items-center space-x-2 pb-2 mx-4">
          <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
            <SearchIcon size={20} color="#00ccbb" />
            <TextInput
              placeholder="Search"
              keyboardType='default'
            />
          </View>
          <AdjustmentsIcon color="#00CCBB" />
        </View>
      
    </SafeAreaView>
  );
}


export default HomeScreen;