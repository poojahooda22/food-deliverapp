import { View, Text, SafeAreaView, Image, TextInput } from 'react-native'
import React, { useLayoutEffect } from 'react';
import { useNavigation } from "@react-navigation/native";
import { ChevronDownIcon, UserIcon, SearchIcon, AdjustmentsIcon } from "react-native-heroicons/outline";
import Search from './Search';


 const  HomeScreen = () => {

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  })

  return (
    <SafeAreaView className="bg-white pt-8">
      <Text>
      
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

          {/* Search Bar */}  
      </Text>
    </SafeAreaView>
  );
}


export default HomeScreen;