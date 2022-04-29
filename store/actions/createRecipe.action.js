export const SELECT_INGREDIENT = "SELECT_INGREDIENT";

export const selectIngredient = (ingredient) => ({
  type: SELECT_INGREDIENT,
  payload: { ingredient: ingredient },
});
