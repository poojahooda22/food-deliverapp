import { View, Text, TextInput } from 'react-native'
import React from 'react'

const Search = () => {
  return (
    <View className="flex-row items-center space-x-2 mx-4">
          <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
          <SearchIcon color="gray" size={20} />
            
          </View>
    </View> 
  )
}

export default Search;