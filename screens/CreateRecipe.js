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
import React, { useEffect, useState } from "react";
import {
  setCategory,
  setDescription,
  setDuration,
  setRecipeName,
} from "../store/actions/createRecipe.action";
import { useDispatch, useSelector } from "react-redux";

import CreateRecipeButton from "../components/CreateRecipeButton";
import CustomInput from "../components/CustomInput";
import SelectIngredientCard from "../components/SelectIngredientCard";
import { dummyData } from "../constants";

const CreateRecipe = ({ navigation }) => {
  const scrollX = useSharedValue(0); //similar to new Animated.value(0)

  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.createRecipe.category);
  const recipeName = useSelector((state) => state.createRecipe.name);
  const recipeDescription = useSelector(
    (state) => state.createRecipe.description
  );
  const recipeDuration = useSelector((state) => state.createRecipe.duration);
  const ingredients = useSelector((state) => state.createRecipe.ingredients);
  const [showButton, setShowButton] = useState(false);
  const [recipeNameOk, setRecipeNameOk] = useState(false);
  const [recipeDurationOk, setRecipeDurationOk] = useState(false);
  const [recipeCategoryOk, setRecipeCategoryOk] = useState(false);

  const onScroll = useAnimatedScrollHandler((event) => {
    scrollX.value = event.contentOffset.x;
  });

  useEffect(() => {
    if (
      recipeNameOk &&
      recipeDurationOk &&
      recipeCategoryOk &&
      ingredients !== null
    ) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }, [recipeNameOk, recipeDurationOk, recipeCategoryOk, ingredients]);

  useEffect(() => {
    if (recipeName !== null && recipeName !== "") {
      setRecipeNameOk(true);
    } else {
      setRecipeNameOk(false);
    }
  }, [recipeName]);

  useEffect(() => {
    if (recipeDuration !== null && recipeDuration !== "") {
      setRecipeDurationOk(true);
    } else {
      setRecipeDurationOk(false);
    }
  }, [recipeDuration]);

  useEffect(() => {
    if (selectedCategory !== null) {
      setRecipeCategoryOk(true);
    } else {
      setRecipeCategoryOk(false);
    }
  }, [selectedCategory]);

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
          />
        </View>
        <View style={{ marginTop: SIZES.padding + 5 }}>
          <Text style={{ ...FONTS.h2 }}>Quieres agregar una descripcion?</Text>
          <CustomInput
            placeholder="Receta dedicada a..."
            value={recipeDescription}
            onChange={setDescription}
            condition="Opcional"
          />
        </View>
        <View style={{ marginTop: SIZES.padding + 5 }}>
          <Text style={{ ...FONTS.h2 }}>Agrega el tiempo de preparacion</Text>
          <CustomInput
            placeholder="30 minutos"
            value={recipeDuration}
            onChange={setDuration}
          />
        </View>
      </View>
    );
  };

  const renderSecondSection = () => {
    return (
      <View style={{ paddingVertical: SIZES.padding }}>
        <View style={{ marginTop: SIZES.padding + 5 }}>
          <Text style={{ ...FONTS.h2 }}>
            Selecciona una de las siguientes categorias
          </Text>
          <View style={{ marginTop: SIZES.padding }}>
            <FlatList
              data={useSelector((state) => state.categories.categories)}
              keyExtractor={(item) => `${item.id}`}
              horizontal
              bounces={false}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingVertical: SIZES.padding }}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                    onPress={() => dispatch(setCategory(item.id))}
                    style={[
                      styles.categoryButton,
                      selectedCategory === item.id
                        ? { backgroundColor: COLORS.black }
                        : null,
                    ]}
                  >
                    <Text
                      style={{
                        ...FONTS.bodyBold,
                        color:
                          selectedCategory === item.id
                            ? COLORS.white
                            : COLORS.black,
                      }}
                    >
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>
        <View style={{ marginTop: SIZES.padding + 5 }}>
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
      </View>
    );
  };

  const renderCreateButton = () => {
    if (recipeName != null && recipeName != "") {
      if (recipeDescription != null && recipeDescription != "") {
        if (recipeDuration != null && recipeDuration != "") {
          if (selectedCategory != null) {
            if (ingredients.length > 0) {
              return <CreateRecipeButton />;
            }
          }
        }
      }
    }
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
        <View style={{ height: SIZES.bottomTabHeight * 3 }} />
      </ScrollView>
      {showButton ? <CreateRecipeButton /> : null}
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
  categoryButton: {
    width: 100,
    height: 40,
    backgroundColor: COLORS.white,
    marginRight: SIZES.padding,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: SIZES.padding + 5,
    ...SHADOW.shadow1,
  },
});
