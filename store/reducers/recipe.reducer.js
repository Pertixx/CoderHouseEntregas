import { FILTER_RECIPES } from "../actions/recipe.action";
import { dummyData } from "../../constants";

const initialState = {
  recipes: dummyData.trendingRecipes,
  filteredRecipes: dummyData.trendingRecipes,
};

const RecipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_RECIPES:
      if (action.payload.selectedCategories.length > 0) {
        let new_filtered = [];
        action.payload.selectedCategories.forEach((category) => {
          initialState.filteredRecipes.map((recipe) => {
            if (recipe.category === category) {
              new_filtered.push(recipe);
            }
          });
        });
        return { ...state, filteredRecipes: new_filtered };
      } else {
        return { ...state, filteredRecipes: initialState.filteredRecipes };
      }
    default:
      return state;
  }
};

export default RecipeReducer;
