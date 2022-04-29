import { SELECT_INGREDIENT } from "../actions/createRecipe.action";

const initialState = {
  recipe: null,
  ingredients: [],
};

const CreateRecipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_INGREDIENT:
      const ingredientIndex = state.ingredients.findIndex(
        (ingredient) => ingredient.id === action.payload.ingredient.id
      );
      if (ingredientIndex === -1) {
        state.ingredients.push(action.payload.ingredient);
      } else {
        state.ingredients.splice(ingredientIndex, 1);
      }
      return { ...state };
    default:
      return state;
  }
};

export default CreateRecipeReducer;
