import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated'
import { COLORS, SIZES, dummyData } from '../constants'
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import RecipeCard from '../components/RecipeCard'
import SearchBar from '../components/SearchBar'
import SearchHistory from '../components/SearchHistory'

const Search = ({ navigation }) => {

  const [ data, setData ] = useState([])
  const [ searchHistory, setSearchHistory ] = useState(dummyData.user.searchHistory)
  const [ text, setText ] = useState(null)

  const renderItem = (item) => {
    return (
      <View style={{paddingHorizontal: SIZES.padding}}>
        <RecipeCard categoryItem={item} navigation={navigation}/>
      </View>
    )
  }

  const renderSearchBar = () => {
    return (
      <View style={{paddingHorizontal: SIZES.padding}}>
        <SearchBar
          onPressSearch={() => console.log('Search')}
          onPressFilter={() => console.log('Filter')}
          text={text}
          onChangeText={setText}
        />
      </View>
    )
  }

  const renderSearchHistory = () => {
    if (dummyData.user.searchHistory.length > 0) {
      return (
        <View style={{paddingHorizontal: SIZES.padding}}>
          <SearchHistory data={searchHistory} onPress={setText} />
        </View>
      )
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      {renderSearchBar()}
      {renderSearchHistory()}
      <FlatList
        data={dummyData.trendingRecipes}
        keyExtractor={item => `${item.id}`}
        renderItem={({ item }) => renderItem(item)}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={
          <View style={{marginBottom: SIZES.bottomTabHeight * 2}} />
        }
        //contentContainerStyle={{flex: 1}}
      />
    </SafeAreaView>
  )
}

export default Search

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white2,
  },
})