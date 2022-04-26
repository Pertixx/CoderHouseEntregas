import { combineReducers, createStore } from 'redux'

import CategoryReducer from './reducers/category.reducer'
import RecipeReducer from './reducers/recipe.reducer'

const RootReducer = combineReducers({
  categories: CategoryReducer,
  recipes: RecipeReducer,
})

export default createStore(RootReducer)