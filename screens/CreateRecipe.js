import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";
import { COLORS, FONTS, SHADOW, SIZES } from "../constants";
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import CustomInput from "../components/CustomInput";
import React from "react";
import SelectIngredientCard from "../components/SelectIngredientCard";
import { dummyData } from "../constants";
import { useState } from "react";

const CreateRecipe = ({ navigation }) => {
  const scrollX = useSharedValue(0); //similar to new Animated.value(0)
  const [recipeName, setRecipeName] = useState(null);
  const [recipeDescription, setRecipeDescription] = useState(null);

  const onScroll = useAnimatedScrollHandler((event) => {
    scrollX.value = event.contentOffset.x;
  });

  const renderItem = (item) => {
    return <SelectIngredientCard item={item} />;
  };

  const renderHeader = () => {
    return (
      <View style={{ paddingHorizontal: SIZES.padding }}>
        <Text>HEADER</Text>
      </View>
    );
  };

  const renderFirstSection = () => {
    return (
      <View style={{ paddingVertical: SIZES.padding }}>
        <View>
          <Text style={{ ...FONTS.h2 }}>Cual es el nombre de la receta?</Text>
          <CustomInput
            placeholder="Fideos con tuco"
            value={recipeName}
            onChange={setRecipeName}
            condition="Obligatorio"
          />
        </View>
        <View style={{ marginTop: SIZES.padding }}>
          <Text style={{ ...FONTS.h2 }}>Quieres agregar una descripcion?</Text>
          <CustomInput
            placeholder="Receta dedicada a..."
            value={recipeDescription}
            onChange={setRecipeDescription}
          />
        </View>
      </View>
    );
  };

  const renderSecondSection = () => {
    return (
      <View style={{ paddingVertical: SIZES.padding }}>
        <Text style={{ ...FONTS.h2 }}>Agreguemos los ingredientes</Text>
        <FlatList
          data={dummyData.ingredients}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item }) => renderItem(item)}
          horizontal
          bounces={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingVertical: SIZES.padding,
          }}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        style={styles.scrollView}
      >
        {renderFirstSection()}
        {renderSecondSection()}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateRecipe;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white2,
  },
  scrollView: {
    backgroundColor: COLORS.white2,
    paddingHorizontal: SIZES.padding,
  },
});
