export const FILTER_RECIPES = "FILTER_RECIPES";

export const filterRecipes = (selectedCategories) => ({
  type: FILTER_RECIPES,
  payload: { selectedCategories: selectedCategories },
});
