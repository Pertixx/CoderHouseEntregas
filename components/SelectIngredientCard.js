import { COLORS, FONTS, SHADOW, SIZES } from "../constants";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { useState } from "react";

const SelectIngredientCard = ({ item }) => {
  const [textInput, setTextInput] = useState(null);
  const [selected, setSelected] = useState(false);

  return (
    <View style={styles.ingredientContainer}>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Image source={item.icon} style={{ width: 30, height: 30 }} />
        <Text style={{ ...FONTS.bodyBold }}>{item.name}</Text>
      </View>
      <TextInput
        placeholder="2 cda"
        style={styles.input}
        value={textInput}
        onChangeText={(text) => setTextInput(text)}
      />
      <TouchableOpacity>
        <AntDesign name="checkcircle" size={SIZES.icon} color={COLORS.black} />
      </TouchableOpacity>
    </View>
  );
};

export default SelectIngredientCard;

const styles = StyleSheet.create({
  ingredientContainer: {
    width: SIZES.width * 0.3,
    height: SIZES.height * 0.2,
    alignItems: "center",
    justifyContent: "space-around",
    marginRight: SIZES.padding,
    backgroundColor: COLORS.white,
    ...SHADOW.shadow1,
    borderRadius: SIZES.padding - 5,
  },
  input: {
    borderWidth: 1,
    width: "90%",
    height: "20%",
    borderRadius: SIZES.padding - 5,
    padding: SIZES.padding - 10,
  },
});
