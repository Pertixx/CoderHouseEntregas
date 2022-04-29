import { combineReducers, createStore } from "redux";

import CategoryReducer from "./reducers/category.reducer";
import CreateRecipeReducer from "./reducers/createRecipe.reducer";
import RecipeReducer from "./reducers/recipe.reducer";

const RootReducer = combineReducers({
  categories: CategoryReducer,
  recipes: RecipeReducer,
  createRecipe: CreateRecipeReducer,
});

export default createStore(RootReducer);
